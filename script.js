//your JS code here. If required.
const btn=document.getElementById("btn")
let name=document.getElementById('name')
let age=document.getElementById('age')


	btn.addEvenListener("click",(event)=>{
		event.preventDefault();
		//check if inputs are not empty
		if(!name.value || !age.value)
		{
			alert("Please fill out all details")
			return
		}

		age=Number(age)
		const promise=new Promise((resolve,reject)=>{
			setTimeout(()=>{
				if(age>=18){
					alert(`Welcome, ${name}. You can vote`)
				    resolve();
				}
				else{
					alert(`Oh sorry ${name}. You aren't old enough.`);
                    reject();
					
				}
			},4000)
		})
		form.reset()
	})