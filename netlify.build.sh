#!/usr/bin/env bash

set -e

curl https://github.com/bazelbuild/bazel/releases/download/2.2.0/bazel-2.2.0-installer-linux-x86_64.sh \
  -o bazel_installer.sh
chmod +x bazel_installer.sh
./bazel_installer.sh --user

yarn build
