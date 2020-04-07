#!/usr/bin/env bash

set -e

curl https://github.com/bazelbuild/bazel/releases/download/2.2.0/bazel-2.2.0-installer-linux-x86_64.sh \
  -L \
  -o bazel_installer.sh
chmod +x bazel_installer.sh
./bazel_installer.sh --user

export PATH="/opt/buildhome/bin:$PATH"

yarn build
