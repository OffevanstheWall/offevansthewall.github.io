run:
	npm run start

build_resume:
	pandoc -o ./src/built-html/resume.html ./src/Resume.md