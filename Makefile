.PHONY: server

server: .server
.server: .venv
	bin/server &

logs:
	cat .server.logs

tail:
	tail -f .server.logs

kill:
	-pkill -P $$(cat .server)

venv: .venv
.venv: requirements-test.in
	rm -rf $@
	python3 -m venv $@
	.venv/bin/python -m pip install -r $^

clean: kill
	-rm -f .server.logs
	-rm -rf .venv
