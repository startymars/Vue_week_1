// 產品資料格式

const products=[
    {
      category: "甜甜圈",
      content: "尺寸：14x14cm",
      description: "濃郁的草莓風味，中心填入滑順不膩口的卡士達內餡，帶來滿滿幸福感！",
      id: "-L9tH8jxVb2Ka_DYPwng",
      is_enabled: true,
      origin_price: 150,
      price: 99,
      title: "草莓莓果夾心圈",
      unit: "個",
      num: 10,
      imageUrl: "https://images.unsplash.com/photo-1583182332473-b31ba08929c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGRvbnV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      imagesUrl: [
        "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2832&q=80",
        "https://images.unsplash.com/photo-1559656914-a30970c1affd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY0fHxkb251dHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
      ]
    },
    {
      category: "蛋糕",
      content: "尺寸：6寸",
      description: "蜜蜂蜜蛋糕，夾層夾上酸酸甜甜的檸檬餡，清爽可口的滋味讓人口水直流！",
      id: "-McJ-VvcwfN1_Ye_NtVA",
      is_enabled: false,
      origin_price: 1000,
      price: 900,
      title: "蜂蜜檸檬蛋糕",
      unit: "個",
      num: 1,
      imageUrl: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
      imagesUrl: [
        "https://images.unsplash.com/photo-1618888007540-2bdead974bbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
      ]
    },
    {
      category: "蛋糕",
      content: "尺寸：6寸",
      description: "法式煎薄餅加上濃郁可可醬，呈現經典的美味及口感。",
      id: "-McJ-VyqaFlLzUMmpPpm",
      is_enabled: true,
      origin_price: 700,
      price: 600,
      title: "暗黑千層",
      unit: "個",
      num: 15,
      imageUrl: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      imagesUrl: [
        "https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
      ]
    }
  ]

  const productItem=document.querySelector(".productItem");

  //渲染畫面
  function render(){
    let str="";
    products.forEach(item=>{
      str+=`<tr>
              <td width="150">${item.title}</td>
                <td width="120">
                  ${item.origin_price}
                </td>
                <td width="120">
                  ${item.price}
                </td>
                <td width="150">
                
                ${item.is_enabled?'<span class="text-success">啟用</span>': '<span>未啟用</span>'} 

                </td>
                <td width="120">
                  <button type="button" class="btn btn-primary checkDetail" data-id="${item.id}">查看細節</button>
                </td>
      </tr>`;

    });
    productItem.innerHTML=str;

    let num=products.length;
    // console.log(num);
    const totalNum=document.querySelector(".totalNum");
    totalNum.innerHTML=`<p class="totalNum">目前有<span>${num}</span> 項產品</p>`;

    //點擊按鈕抓取對應id
    const checkDetail=document.querySelectorAll(".checkDetail");
    checkDetail.forEach(btnItem=>{
      btnItem.addEventListener("click",function(e){
        // console.log(e.target.dataset.id);
        let id=e.target.dataset.id;
        renderClickBtn(id);  //回傳點擊到的按鈕id
      
      })
    })

  }

  render();

 
  //選取右方card
   const cardItem=document.querySelector(".cardItem");
  //選取右方預設文字內容
  const chooseItem=document.querySelector(".chooseItem");
  
  //點擊按鈕後渲染到畫面
  function renderClickBtn(id){
    products.forEach(item=>{
      if(item.id===id){
       
        let card="";
  
          card+=`<div class="card mb-3">
            <img src="${item.imageUrl}" class="card-img-top primary-image" alt="主圖">
            <div class="card-body">
              <h5 class="card-title">
                ${item.title}
                <span class="badge bg-primary ms-2">${item.category}</span>
              </h5>
              <p class="card-text">商品描述：${item.description}</p>
              <p class="card-text">商品內容：${item.content}</p>
              <div class="d-flex">
                <p class="card-text me-2">${item.price}</p>
                <p class="card-text text-secondary"><del>${item.origin_price}</del></p>
                ${item.unit} / 元
              </div>
            </div>
          </div>
          <div>
              <img src="${item.imagesUrl}" alt="" class="images m-2">
          </div>`;

          //清除原有的名稱
          chooseItem.innerHTML="";
          
          cardItem.innerHTML=card;
          
      }
      
    })
  }
  


  