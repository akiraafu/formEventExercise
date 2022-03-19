const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const productInput=form.elements.product;
    const qtyInput=form.elements.qty;
    addIterm(productInput.value,qtyInput.value);
    productInput.value='';
    qtyInput.value='';
    
});

const addIterm=(product, qty)=>{
    const li=document.createElement('li');
    li.innerText=`${qty} ${product}`;
    document.getElementById('list').appendChild(li);
};
