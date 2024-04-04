import React from "react";
import { Helmet } from "react-helmet";

function App() {
	return (
		<div className="App">
			<Helmet>
				<title>나만의 React 앱</title>
				<meta name="description" content="나만의 React 앱에 대한 설명" />
				<meta property="og:title" content="나만의 React 앱" />
				<meta
					property="og:description"
					content="이것은 나만의 React 앱입니다."
				/>
				<meta property="og:image" content="여기에 이미지 URL을 넣으세요" />
				<meta property="og:url" content="https://www.yourdomain.com" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="나만의 React 앱" />
				<meta
					name="twitter:description"
					content="이것은 나만의 React 앱입니다."
				/>
				<meta name="twitter:image" content="여기에 이미지 URL을 넣으세요" />
			</Helmet>
			{/* 애플리케이션의 나머지 부분 */}
			이것은 나만의 React 앱입니다.
		</div>
	);
}

export default App;
