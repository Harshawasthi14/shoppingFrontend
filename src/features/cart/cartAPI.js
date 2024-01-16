export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/cart', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function fetchItemsByUserId() {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/cart') 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/cart/'+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/cart/'+itemId, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data:{id:itemId} });
  });
}

export function resetCart() {
  return new Promise(async (resolve) => {
  const response=await fetchItemsByUserId();
  const items=response.data;
  for(let item of items)
  {
    await deleteItemFromCart(item.id);
  }
  resolve({status:"success"})
})
}