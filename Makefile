.PHONY: server

node_modules: package.json
	npm install
	npx playwright install

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
	-rm -rf node_modules
	-rm -rf playwright-report
	-rm -rf dist

playwright-report: node_modules
	npm run test:axe
