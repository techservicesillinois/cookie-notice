.PHONY: server

server: .server
.server:
	bin/server &

logs:
	cat .server.logs

tail:
	tail -f .server.logs

kill:
	-kill $$(cat .server)

clean: kill
	-rm -f .server.logs
