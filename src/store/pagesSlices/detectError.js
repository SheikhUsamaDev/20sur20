import { toast } from "react-toastify";
import { refreshTokensAsyncThunk } from "./authSlice";
// import { refreshTokensAsyncThunk, userLogoutAsyncThunk } from "../redux/pagesSlices/authSlice";

// it will generate 3 state of every asyncThunk
export const reduxToolKitCaseBuilder = (cases) => {
  return cases.flatMap((el) => [el.pending, el.fulfilled, el.rejected]);
};

// it will apply trycatch on every asyncthunk
export const catchAsync = (fn) => (_, api) => {
  return Promise.resolve(fn(_, api)).catch((error) => {
    return detectError(error, api?.dispatch, api?.rejectWithValue)
  }
  );
};

// this method will trigger on every asyncThunk error
export const detectError = (error, dispatch, rejectWithValue) => {
  if (error.code == "ERR_NETWORK" && error.response?.status == 0) {
    // setErrorForReload is use for server unavalible errors display
    toast.error("Server is unavailable")
    return rejectWithValue(error);
  }
  // on unAuthenticated(401) error for every request/asyncThunk
  // if (error.response?.status === 401 && !error?.request?.responseURL?.includes('login')) {
  //   const uth_try = sessionStorage.getItem('auth-try');
  //   console.log(uth_try, typeof(uth_try))
  //   if (uth_try == "false" || uth_try == null || uth_try == false) {
  //     sessionStorage.setItem('auth-try', "true");
  //     dispatch(refreshTokensAsyncThunk({ callBack: () => sessionStorage.setItem('auth-try', "false") }))
  //   } else {
  //     // othervise logout and clear local storage(auth-try)
  //     sessionStorage.setItem('auth-try', 'false');
  //     dispatch(userLogoutAsyncThunk({}))
  //   }
  //   if (rejectWithValue) {
  //     return rejectWithValue(error);
  //   }
  // }

  console.log("error", error)
  // it will show erorr toast
  // if(typeof error == "object" && error['reason']) return toast.error(error['reason']) //for empl
  if (error?.response) {
    if (error.response?.status == 422) {
      if (error.response?.data?.errors) {
        Object.keys(error.response?.data?.errors).map((item) =>
          // 
          toast.error(`${item} : ${error.response?.data?.errors[item]}`)
        );
      }
    } else
      toast.error(error?.response?.data?.message || error?.response?.data?.status)
  }
  // if detectError have own error
  if (rejectWithValue) {
    return rejectWithValue(error);
  }
};

export const spreadObjValuesNotNull = (ob) => {
  if (typeof ob === "object" && ob) {
    const tempObj = {};
    Object.keys(ob).forEach((key) => {
      tempObj[key] = ob[key] ?? "";
    });
    return tempObj;
  } else {
    return ob;
  }
};

//convert search params to opject
export function paramsToObject(entries) {
  const result = {};
  for (const [key, value] of entries) {
    result[key] = value;
  }
  return result;
}

export const mapAlterString = (_array, string) => {
  if (Array.isArray(_array) && _array.length > 0) {
    return _array.map((item) => item[string]);
  } else {
    return string;
  }
};

export const subStringNumber = (stirng, numbers) => {
  if (typeof stirng == "string" && stirng.length > numbers) {
    return stirng.substring(1, numbers) + "...";
  } else {
    return stirng;
  }
};

// handle error loading and server params
function handleLoadingErrorParamsForAsycThunk(state, { meta, payload, type }) {
  const action = type.split("/");

  if (meta?.arg && type.endsWith("/pending")) {
    state.paramsForThunk[action[1]] = meta?.arg;
  }

  if (type.endsWith("/rejected") && payload?.response) {
    state.errorMessages[action[1]] =
      payload?.response?.data?.message ??
      payload?.response?.message ??
      "Something went wrong";
    state.errorCodes[action[1]] =
      payload?.response?.status ?? 500;
  }

  state.errors[action[1]] = type.endsWith("/rejected");
  state.loadings[action[1]] = type.endsWith("/pending");
}
export { handleLoadingErrorParamsForAsycThunk };
