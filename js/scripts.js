function Pizza(selectedSize,selectedToppings,selectedCrust) {
    this.selectedSize = selectedSize;
    this.selectedToppings = selectedToppings;
    this.selectedCrust = selectedCrust;
  }
  
  
  
  Pizza.prototype.sizeCost = function() {
    var sizes = {
    
      small: 600,
      medium: 800,
      large: 1000
    };
  
    return sizes[this.selectedSize];
  }
  
  
  
  Pizza.prototype.toppingsCost = function() {
    var totalToppingsCost = 0;
    var toppings = {
      peri-peri: 200,  
      pepperoni: 200,
      sausage: 200,
      bacon: 200,
      extra-cheese: 200,
      onion: 200,
    };
  
    this.selectedToppings.forEach(function(topping) {
      totalToppingsCost += toppings[topping];
    });
  
    return totalToppingsCost;
  }
  
  
  
  Pizza.prototype.crustCost = function() {
    var crusts = {
    
      thick: 100,
      thin: 100,
    };
  
    return crusts[this.selectedCrust];
  }
  
  
  Pizza.prototype.pizzaCost = function() {
    return this.sizeCost() + this.toppingsCost() + this.crustCost();
  }
  
  
  
  
  $(document).ready(function() {
    $('#pizza-order').submit(function(event) {
      event.preventDefault();
    
      var size = $("input[name=optradio1]:checked").val();
      var crust = $("input[name=me]:checked").val();
      var toppings = [];
  
      
      $("input:checkbox:checked").map(function(){
        toppings.push($(this).val());
      });
      
      var userPizza = new Pizza(size,toppings,crust);
      var grandTotal = userPizza.pizzaCost().toFixed(2);
  
      $('#totalCostSpan').text(grandTotal);
  
  
    });
     $('.but').click(function() {
      $('.second').show();
      
    
  
  
     });
  
     $('.bu').click(function() {
      alert("your Order will be ready in 30 minutes, Thank You. Karibu Tena!")
      
     
      
    
  
  
     });
   
  
  });