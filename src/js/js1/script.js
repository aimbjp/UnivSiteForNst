function answer() {
	var age = Number(document.getElementById('age').value);
	var amount = prompt("Введите сумму денег на покупку:");
	if (amount == null || amount == "") {
	  sum = "Повторите ввод суммы:";
	} else {
	  sum = Number(amount);
	}
	let discount = 1;
	if (Number(age) < 20) {
	  discount = 0.9;
	}
	if (Number(age) > 65) {
	  discount = 0.8;
	}
  
	let resultHtml = "Возраст:" + age + "<br>" + "Сумма денег:" + sum + "<br>" + "Скидка: " + Math.round((1 - discount) * 100) + "%" + "<br>";
  
	if (sum >= 300 * discount && sum <= 3000 * discount) {
	  resultHtml = resultHtml + "Купите Чайник" + "<br>" + "<img src=\"../img/JS1/teapot.jpg\"/>";
	}
	if (sum >= 3001 * discount && sum <= 10000 * discount) {
	  resultHtml = resultHtml + "Купите Пылесос" + "<br>" + "<img src=\"../img/JS1/cleaner.jpg\"/>";
	}
	if (sum >= 10000 * discount) {
	  resultHtml = resultHtml + "Купите Холодильник" + "<br>" + "<img src=\"../img/JS1/fridge.jpg\"/>";
	}
  
	document.getElementById("result").innerHTML = resultHtml;
  
  }


