# Vite와 SASS/SCSS 로 만드는 Youtube-APP
## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fire.png" alt="Fire" width="2%" /> vite
`$ npm init vite`

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fire.png" alt="Fire" width="2%" /> Modules
`$ npm install axios dayjs react-icons react-router-dom react-tooltip react-youtube sass`

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fire.png" alt="Fire" width="2%" /> lint
`$ npm istall -D eslint`  
`$ npx eslint --init`

## ✏ Vite에서 .env 환경변수 넣어쓰기

1. 환경변수 작성
vite에서 환경변수를 사용하기 위해서는 CRA와는 다르게 REACT_APP_이 아닌 VITE_를 앞에 작성을 해주어야 합니다.
- `VITE_API_KEY = "API_KEY"`

3. 환경변수 불러오기
변수 작성방법이 다르듯이 불러오는 방법도 다릅니다.
process.env.가 아닌 import.meta.env.로 접근을 해주어야 합니다.
- `import.meta.env.VITE_API_KEY`