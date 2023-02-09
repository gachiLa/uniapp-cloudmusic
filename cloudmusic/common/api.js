import baseUrl from './config.js'

export function list(listId){
	return new Promise((resolve,reject)=>{ 
	uni.request({
		url: `${baseUrl}/playlist/detail?id=${listId}`,
		method: 'GET',
		data: {},
		success: res => {
			resolve(res)
		},
		fail: () => {},
		complete: () => {}
	});
	})
}

export function topList(){
	return new Promise((resolve,reject)=>{	// ure
		uni.request({
			url: `${baseUrl}/toplist/detail`,
			method: 'GET',
			data: {},
			success: ({data}) => {
				let {code,list}	= data
				let nameId = []
				if(code===200){
					// 只取前三条数据
					let res = list.slice(0,4)
					res.forEach(item => {
						nameId.push(item.id)
					})
					console.log(nameId);
					resolve(res)
				}
			},
			fail: () => {},
			complete: () => {}
		});
	})
}