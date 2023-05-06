//it produces objects

function createCircle(redius)
{
    const circle = {
        redius : redius,
        draw(user)
        {
            console.log('This is draw '+user);
        }
    }
    return circle;
}

const c1 = createCircle(1); //returning 2 objects
console.log(c1); // printing two object
console.log(c1.redius); //printing 1st object
c1.draw('Roy'); //priting 2nd object


function createCircle1(redius)
{
    return {
        redius,
        draw()
        {
            console.log('This is draw from createCircle1');
        }
    }
}

const c2 = createCircle1(5); //returning 2 objects
console.log(c2); // printing two object
console.log(c2.redius); //printing 1st object
c2.draw(); //priting 2nd object

