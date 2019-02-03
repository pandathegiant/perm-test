#!/bin/bash

#https://cloud.google.com/sdk/gcloud/reference/auth/application-default/print-access-token
token=$(gcloud auth application-default print-access-token)

curl "https://content-cloudbuild.googleapis.com/v1/projects/ahope-parse-poc/triggers/affc72ce-bab3-4cd4-84fb-734bf87f9dc7:run?access_token=${token}" -H 'origin: https://content-cloudbuild.googleapis.com' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: en-US,en;q=0.9' -H 'pragma: no-cache' -H 'content-type: application/json' -H 'accept: */*' -H 'cache-control: no-cache'  --data-binary '{"projectId":"ahope-parse-poc","repoName":"ahope-parse-poc-repo","branchName":"master"}' --compressed
