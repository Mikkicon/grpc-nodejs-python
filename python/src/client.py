import grpc
import proto.service.hello.v1.hello_service_pb2 as hello_service_pb2

channel = grpc.insecure_channel('localhost:4000')
stub = hello_service_pb2.com_dot_language_dot_v1_dot_language__pb2(channel)

req = hello_service_pb2.GreetRequest
print(stub.Search(req))