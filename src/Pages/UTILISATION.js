import React from 'react';
import KeyboardBackspaceTwoToneIcon from "@mui/icons-material/KeyboardBackspaceTwoTone";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UTILISATION = () => {
  const { user } = useSelector((s) => s.auth);

  return (
    <div className='noticeLegal'>
        {
        Object.keys(user).length ===0 && <div className="Back_box d-lg-flex d-none">
        <div className="icon-box">
          <Link to="/">
            <KeyboardBackspaceTwoToneIcon />
          </Link>
        </div>
        <div className= "icon-box">
          <Link to="/">
            <p>Retour</p>
          </Link>
        </div>
      </div> 
      }
            <div className="noticelegal_content">
                <div className="notice_heading">
                    <h1>Termes d’utilisation</h1>
                </div>
                <div className="notice_para">
                    <h1 className="para_heading">
                        Article_1 - Politique_d’utilisation
                    </h1>
                    <span className="para_content">
                        Lorem ipsum dolor sit amet consectetur. Condimentum iaculis
                        semper sit sit feugiat egestas purus arcu. Donec tristique
                        purus aliquet morbi. Semper mauris id suspendisse
                        pellentesque. In odio id ullamcorper etiam est viverra in
                        amet. Etiam morbi mattis ultricies sit. Sed interdum arcu at
                        tempor nibh fermentum pharetra tincidunt. Euismod ac urna
                        lacinia lectus aliquet.
                        <br />
                        <br />
                        Consectetur nibh nascetur at consectetur nisl tincidunt elit
                        nunc. Cras sit mauris eget tempus netus augue ac neque
                        scelerisque. Elit eget et nunc eget. Tristique urna sit in
                        ipsum laoreet tincidunt. Et aliquam amet duis sit. Amet eget
                        ut proin et nulla aliquet porttitor sed. Magna in nec
                        fringilla ipsum amet sed nisl volutpat. Augue euismod
                        elementum aenean donec tellus at varius. Gravida morbi
                        quisque ut rhoncus nisl fermentum tempor ullamcorper. Ut
                        nisl sem tempor nisl imperdiet. Lacus aliquam id elementum
                        ut arcu nibh. Sit sed quam justo vel diam volutpat sodales.
                        Ac egestas turpis felis quis dolor. Ut euismod lorem et
                        dignissim facilisis mi egestas ultrices.
                        <br />
                        <br />
                        Tortor sit netus donec euismod. Purus suscipit vehicula
                        risus nec imperdiet aliquam ultricies. Lectus fames donec
                        tellus et tristique turpis aenean et. Mattis at pharetra
                        viverra laoreet posuere. Elementum leo diam cum porta semper
                        cursus tellus. Lorem netus varius nulla ut nam. Ultricies
                        sapien id sed turpis. Ante id augue porttitor sed. Blandit
                        urna sociis lobortis malesuada. Ullamcorper mattis elementum
                        ut velit id malesuada. Dictum cum hac fames orci ullamcorper
                        condimentum. Dapibus nec ipsum et accumsan a aliquam eu
                        proin. Ac libero mauris eu lacus turpis.
                        <br />
                        <br />
                        Pellentesque at in libero pellentesque. Ullamcorper purus
                        enim egestas nisi eget. Tempor vestibulum donec ac et.
                        Quisque mus in risus sed quis vel tempus. Mi eget nisl
                        tincidunt volutpat a non habitasse sit. Augue mattis sed a
                        pharetra pharetra congue mollis. Elementum congue posuere
                        accumsan mi aliquam. Urna semper eget viverra risus elit.
                        Orci et nascetur neque elit morbi aliquet et. Nascetur donec
                        adipiscing dapibus nibh facilisis nec penatibus. Egestas
                        diam aliquam diam commodo orci ipsum nisi venenatis. Nunc
                        viverra amet aliquam netus amet rhoncus. Adipiscing rhoncus
                        sit elementum at vehicula. At sit dictum quam vitae.
                        <br />
                        Ut congue erat in habitant egestas. Porttitor egestas tempus
                        enim velit eros volutpat enim elit accumsan. Phasellus odio
                        molestie non lorem arcu. Egestas malesuada proin tristique
                        suspendisse. Ultrices lorem at vel scelerisque. Duis
                        nascetur malesuada ullamcorper senectus quis facilisi
                        aliquam aliquam. Congue risus id interdum odio at volutpat
                        malesuada ut. At proin nisi tellus pellentesque faucibus.
                        Vitae velit at semper dignissim sagittis augue ullamcorper.
                        Sed elit nunc lacus nunc ut sagittis. Id consectetur
                        scelerisque euismod cras sollicitudin amet ornare et ipsum.
                        Id duis amet rhoncus sed donec sed molestie eget dictum.
                    </span>
                </div>
                <div className="notice_para">
                    <h1 className="para_heading">
                        Article_2 - Comportements_interdits
                    </h1>
                    <span className="para_content">
                        Lorem ipsum dolor sit amet consectetur. Condimentum iaculis
                        semper sit sit feugiat egestas purus arcu. Donec tristique
                        purus aliquet morbi. Semper mauris id suspendisse
                        pellentesque. In odio id ullamcorper etiam est viverra in
                        amet. Etiam morbi mattis ultricies sit. Sed interdum arcu at
                        tempor nibh fermentum pharetra tincidunt. Euismod ac urna
                        lacinia lectus aliquet.
                        <br />
                        <br />
                        Consectetur nibh nascetur at consectetur nisl tincidunt elit
                        nunc. Cras sit mauris eget tempus netus augue ac neque
                        scelerisque. Elit eget et nunc eget. Tristique urna sit in
                        ipsum laoreet tincidunt. Et aliquam amet duis sit. Amet eget
                        ut proin et nulla aliquet porttitor sed. Magna in nec
                        fringilla ipsum amet sed nisl volutpat. Augue euismod
                        elementum aenean donec tellus at varius. Gravida morbi
                        quisque ut rhoncus nisl fermentum tempor ullamcorper. Ut
                        nisl sem tempor nisl imperdiet. Lacus aliquam id elementum
                        ut arcu nibh. Sit sed quam justo vel diam volutpat sodales.
                        Ac egestas turpis felis quis dolor. Ut euismod lorem et
                        dignissim facilisis mi egestas ultrices.
                        <br />
                        <br />
                        Tortor sit netus donec euismod. Purus suscipit vehicula
                        risus nec imperdiet aliquam ultricies. Lectus fames donec
                        tellus et tristique turpis aenean et. Mattis at pharetra
                        viverra laoreet posuere. Elementum leo diam cum porta semper
                        cursus tellus. Lorem netus varius nulla ut nam. Ultricies
                        sapien id sed turpis. Ante id augue porttitor sed. Blandit
                        urna sociis lobortis malesuada. Ullamcorper mattis elementum
                        ut velit id malesuada. Dictum cum hac fames orci ullamcorper
                        condimentum. Dapibus nec ipsum et accumsan a aliquam eu
                        proin. Ac libero mauris eu lacus turpis.
                        <br />
                        <br />
                        Pellentesque at in libero pellentesque. Ullamcorper purus
                        enim egestas nisi eget. Tempor vestibulum donec ac et.
                        Quisque mus in risus sed quis vel tempus. Mi eget nisl
                        tincidunt volutpat a non habitasse sit. Augue mattis sed a
                        pharetra pharetra congue mollis. Elementum congue posuere
                        accumsan mi aliquam. Urna semper eget viverra risus elit.
                        Orci et nascetur neque elit morbi aliquet et. Nascetur donec
                        adipiscing dapibus nibh facilisis nec penatibus. Egestas
                        diam aliquam diam commodo orci ipsum nisi venenatis. Nunc
                        viverra amet aliquam netus amet rhoncus. Adipiscing rhoncus
                        sit elementum at vehicula. At sit dictum quam vitae.
                        <br />
                        Ut congue erat in habitant egestas. Porttitor egestas tempus
                        enim velit eros volutpat enim elit accumsan. Phasellus odio
                        molestie non lorem arcu. Egestas malesuada proin tristique
                        suspendisse. Ultrices lorem at vel scelerisque. Duis
                        nascetur malesuada ullamcorper senectus quis facilisi
                        aliquam aliquam. Congue risus id interdum odio at volutpat
                        malesuada ut. At proin nisi tellus pellentesque faucibus.
                        Vitae velit at semper dignissim sagittis augue ullamcorper.
                        Sed elit nunc lacus nunc ut sagittis. Id consectetur
                        scelerisque euismod cras sollicitudin amet ornare et ipsum.
                        Id duis amet rhoncus sed donec sed molestie eget dictum.
                    </span>
                </div>
            </div>

        </div>
  )
}

export default UTILISATION
