describe('Testing input', function(){
    it('visit site', function(){
        cy.visit('http://localhost:3002/pizza')
    })
    it('tests name input', function(){
        cy.get('[data-cy=name]').type('Reynaldo Higgins');
    });
    it('testing checkbox input', function(){
        cy.get('[data-cy=pepperoni]').check().should('be.checked')
    }) ;
    it('testing checkbox input', function(){
        cy.get('[data-cy=peppers]').check().should('be.checked')
    }) ;
    it('testing checkbox input', function(){
        cy.get('[data-cy=sausage]').check().should('be.checked')
    }) ;
    it('testing checkbox input', function(){
        cy.get('[data-cy=onions]').check().should('be.checked')
    }) ;
    it('testing submit input', function(){
        cy.get('[data-cy=special]').type("I need a combo and a couple supremes A couple deep dish pizzas that'll bust through my jeans Send a 20,000 inch meat lovers where the cheese as gooey And a female driver that’ll feed it to me I need a margherita pizza with some buffalo mozzarella A taco pizza pie that you can cover with sausage peppers A Detroit style Greek pizza 7 extra large BBQ meat pizzas 5 big pizzas, please! With absolutely no meat, baby boy, nothing but cheese I need a pizza made of money with a couple of geez Stuffed in the crust. Take it out the register if you must 57 pepperoni pizzas with some sausage Canadian bacon, a little garlic and some mozza… rella You sound like a pretty nice fella So throw a little pizza in made out of pudding and jello I got a couple people that are coming over tonight I need some Dr Pepper, Mountain Dew, some Coke and some Sprite I need a couple other things, and I hope it’s alright Because you sitting there like: Oh my God he's flowing is so tight I need a Game of Thrones pizza covered in fried dragon meat A jalapeño habanero pepper for the savage heat And if you think I’m getting to cool I want the pizza from my old elementary school Cafeteria. That we used to get on Fridays Oh man, it was perfect and damn I’ve read 285 books this year, my man You better bring me 10 personal pans! A Chinese pizza, fill it with egg rolls I’ll jump into it like I’m Philip DeFranco I’m gonna pay, gonna give you my bankroll I’m thinking of sticking and breaking a mill with insane flows WOO! I want some pizza with some BBQ chicken A little pineapple to get the little heart in me ticking I'm gonna eat it with my wife while I hold her butt I’m taking a nibble off the end right off the golden crust Put a little garlic and some onion In the middle of the crust and go and sprinkle it with some funyuns Add a little parmesan, a little ham, a little cheddar And some cheesy macaroni swear to God it makes it better I don’t care if anybody wanna judge me for the food I’m getting I just wanna cater to the party and the mood I’m in I just wanna pizza, I know it’s the best And tomorrow I’ll have the leftovers for breakfast! Make sure that crust is not a bit mushy And, oh yeah, please, throw in a chocolate chip cookie Because I'm a thug")
    }) ;
    it('testing submit input', function(){
        cy.get('[data-cy=submit]').submit()
    }) ;
});