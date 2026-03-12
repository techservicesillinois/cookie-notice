.PHONY: server

server: .server
.server:
	bin/server &

kill:
	-kill $$(cat .server)
	-rm .server
