.PHONY: server

node_modules: package.json
	npm install

server: .server
.server: node_modules
	bin/server &

logs:
	cat .server.logs

tail:
	tail -f .server.logs

kill:
	-kill $$(cat .server)

clean: kill
	-rm -f .server.logs
	-rm -f node_modules
