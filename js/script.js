function getMyPhoto(url, method, mycbfn) {
  let xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.send();

  xhr.onload = function (response) {
    console.log(xhr.responseText);
    mycbfn(xhr.responseText);
  };

  
}

getMyPhoto("https://jsonplaceholder.typicode.com/photos", 'GET', function (response) {
//   console.log(response);

    document.querySelector('.spinner-border').remove();

  response = JSON.parse(response);

  var tbody = document.querySelector('.table > tbody');

  response.forEach((currentElement, index, arr) => {
      console.log(currentElement);

      var tr = document.createElement('tr');
      var td1 = document.createElement('td');
      td1.innerHTML = currentElement.albumId;
      var td2 = document.createElement('td');
      td2.innerHTML = currentElement.id;
      var td3 = document.createElement('td');
      td3.innerHTML = currentElement.title;
      var td4 = document.createElement('td');
      td4.innerHTML = currentElement.url;
      var td5 = document.createElement('td');
      var img = document.createElement('img');
      img.setAttribute("src", currentElement.thumbnailUrl);
      td5.appendChild(img);

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      tbody.appendChild(tr);
  })
});
