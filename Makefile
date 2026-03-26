.PHONY: server

server: .server
.server:
	bin/server &

logs:
	cat .server.logs

tail:
	tail -f .server.logs

kill:
	-kill -f $$(cat .server)
	-rm -f .server

venv: .venv
.venv: requirements-test.in
	rm -rf $@
	uv venv
	uv pip install -r $<

clean: kill
	-rm -f .server.logs
	-rm -rf .venv
