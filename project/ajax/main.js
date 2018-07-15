window.jQuery = function (nodeOrSelector) {
	let nodes = {}
	nodes.addClass = function () { };
	nodes.html = function () { };
	return nodes
}
window.jQuery.ajax = function ({url,method,body,successFn,failFn,headers}) {
	// let url = options.url
	// let method = options.method
	// let body = options.body
	// let successFn = options.successFn
	// let failFn = options.failFn
	// let headers = options.headers
	//ES6 析构赋值
	//let {url,method,body,successFn,failFn,headers} = options
	//将解构直接放到参数里头

	let request = new XMLHttpRequest()
	request.open(method, url)//配置request

	for (let key in headers) {
		let value = headers[key]
		request.setRequestHeader(key,value)
	}
	request.onreadystatechange = () => {
		if (request.readyState === 4) {
			if (request.status >= 200 && request.status <= 300) {
				successFn.call(undefined, request.responseText)
			} else if (request.status >= 400) {
				failFn.call(undefined, request)
			}
		}
	}
	request.send(body)
}
window.$ = window.jQuery

function f1(responseText){}
function f2(responseText){}

myButton.addEventListener('click', (e) => {
	window.$.ajax({
		url: '/xxx',
		method: 'get',
		headers:{
			'content-type':'application/x-www-form-urlencoded',
			'ck':17,
		},
		successFn: (x) => {
			f1.call(undefined,x)
			f2.call(undefined,x)
		},   
		failFn: () => { },
	})
})


