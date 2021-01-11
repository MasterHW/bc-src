#!/bin/bash

PY_GRPC_DIR=bcfanout/grpc

python3 -m grpc_tools.protoc -I../protos --python_out=$PY_GRPC_DIR --grpc_python_out=$PY_GRPC_DIR ../protos/core.proto
python3 -m grpc_tools.protoc -I../protos --python_out=$PY_GRPC_DIR --grpc_python_out=$PY_GRPC_DIR ../protos/miner.proto
