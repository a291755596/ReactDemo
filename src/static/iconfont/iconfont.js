import { createGlobalStyle } from 'styled-components'

export const FontStyle = createGlobalStyle`
	@font-face {
		font - family: "iconfont";
		src: url('./iconfont.eot?t=1578901518993'); /* IE9 */
		src: url('./iconfont.eot?t=1578901518993#iefix') format('embedded-opentype'), /* IE6-IE8 */
		url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQwAAsAAAAACEQAAAPhAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqEBINUATYCJAMQCwoABCAFhG0HQxtBB8gekiSBIAEFCiiAgo0WD//t9799Zs59f6580SRJkaQRXx1PJJOQxCIJQiFlDYXM6l7CH8pND45aUrG0m2dmNfUAFxosLKT6mhswNUFq/pt6/vtT/8/l9FbPA5vfznKZY/JhgPHWwMZYuMgKnFJuGLvyIs4TGGybSXA5KaMA2ErGtEA8Y2QUsE0ZZQ09NM2sZG2Kj6DTynvhU8AH//vxH5wIW4quMi668iBRCmJ+4UODcM7/t27XueDteHawTVQcByTxqNR5BwyTx0GDMljkDKBpCmP1BA0N/ofEe1E28y+PUFRixiifwCmUqvzCbZLgVxBJ4degUYV4Tm7o8QnwC2g3x9k/lWnK1tbxWRMlZnORxVJsMhUajVWWvCDgJx9mNjcVzSh0wm7ZF2AKvLRMPwbbOqyEuoIvB4YYvmDLngvmFhfP9e+IKDx7ELw9hC+/IxC8wPYbC/aeHKW/jC2belF8htFIEFenztywidDhyz0Nd6LxfVNM/cWW9jGecw/XGnuKNnjMEzds0e93n5UX7m2xhBs8z5kI3GCZYbEQupYXE/fAtjbo5O5ta90j2iuic+BeuKetbW+PDj54INSZPFijg3p4/wHUQR78Adwkfm2XStougi908qupCa+Q4/87l8zyqOxCYZyYibKIfp/V8vdCvAVWF7zYaUWMQyWeHhM2UFXMPxlO/B4x6eOkMSDi+xyY820SExLuGvKMdB8t3nbydGhzhMHxRrBbVsTsFP86qa3Dc0HBSOH9lxlWk7gHVw6fowunWHt0Eqk3zrkzsVY9a2Pzrl1jM5DrCff5yrSLZ+NybVeFzgviDh1OW3TSw7/KLDxuvVEkDXg3fld5aQ7QADgMnoUzfR/4BcLyzUlY3/3tcS79+GOqdor4aotfbuRnXKwjlrZT+WWi1qJ/q8hRkL9SVWKYMmWxbTxcC6WrBp9SMBjwR7Os6BpDtT6D0HU36zEUc7aganbQpB2HzugUzDTnYHBM8ubRKg4U2eOohQDCkhNQLPgM1ZJnaNI6obPhLcwsBYTBrXDbc7QXDBbPIYpHUlLcRDISVk1bFh4LKvOQrE5JcUmJzyhCnJaJkL5ePtlMMlIjbowF2nqZH8/TJM2xKjIJXIaUSpbUcKwcSXivWp7XhHl702Vv8pKwKoC5hINQeIgUSawJiSHBUqPdxjws9/k8iEwdJQpXQ6lwF0E4Wkz/JF9efFqgyUp1K8q1DNaqJ+OHx6PxJBqHpUJKgnZEaSZZJE35KDlEgueltkdcI4w3qke3VXrNr1Y94SYYGPtklKiR0RkeUGqZlJIz7nBhLGXTVKeiWDEDAAAAAA==') format('woff2'),
		url('./iconfont.woff?t=1578901518993') format('woff'),
		url('./iconfont.ttf?t=1578901518993') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
		url('./iconfont.svg?t=1578901518993#iconfont') format('svg'); /* iOS 4.1- */
	}

	&.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	&.iconfangdajing:before {
		content: "\e60b";
	}

	&.iconAa:before {
		content: "\\e636";
	}

	&.iconyumaobi:before {
		content: "\e6e5";
	}
`



