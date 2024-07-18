#!/bin/bash

# Define the environment/target (e.g., 'staging' or 'production')
env_target=$1

# Define the Firebase project ID based on the environment/target
if [ "$env_target" == "staging" ]; then
    project_id="tkbackup-gmz"
    target_name="tkbackup-gmz"
elif [ "$env_target" == "production" ]; then
    project_id="tokextract-19412"
    target_name="tokbackup"
else
    echo "Invalid environment/target. Exiting..."
    exit 1
fi

# Generate firebase.json dynamically
echo "Generating firebase.json for $env_target..."
cat <<EOF > firebase.json
{
  "hosting": {
    "target": "$target_name",
    "public": "build",
      "rewrites": [ {
      "source": "**",
      "destination": "/index.html"
    } ],
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
EOF

npm run build

# Check for any error during the build
if [ $? -ne 0 ]; then
    echo "Error during the build. Exiting..."
    exit 1
fi
# Set Firebase to use the specified project
echo "Setting Firebase to use project '$project_id'..."
firebase use $project_id
firebase hosting:sites:list --project $project_id

# Deploy the app to Firebase specifying the target
echo "Deploying to Firebase target '$target_name' in project '$project_id'..."
firebase deploy --only hosting:$target_name

# Check for any error during the deployment
if [ $? -ne 0 ]; then
    echo "Error during Firebase deployment. Exiting..."
    exit 1
fi

echo "Deployment successful!"




