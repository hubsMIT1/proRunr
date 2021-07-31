 w1 = window.innerWidth;
        h1 = window.innerHeight;
        var body = document.querySelector('body');

        var highscore = 0;
      
        var highlevel = 0;

        // var audio1 = new Audio('/proRunr/audio1.wav')
        var over1 = new Audio('/proRunr/over.wav')
        // var lvlup = new Audio('./lvlUP.mp3')
//         var over2 = new Audio('./over2.m4a');
        // var ad1 = new Audio('./rdc1.mp3')

        var ad2 = new Audio('/proRunr/mus1.mp3');
        // ad2.play();
        w1 = window.innerWidth;
        h1 = window.innerHeight;


        var highscore = localStorage.getItem("score");
        var highlevel = localStorage.getItem("lvl");



        var check = document.querySelector('.sc');
        var showscr = document.querySelector('.scr');
        // showscr.style.fontSize = w1 / 28 + 'px'
        // showscr.style.position = 'absolute'
        // showscr.style.left = w1 / 4 + 'px'



        var level1 = document.querySelector('.lvl1');

        level1.style.fontSize = w1 / 28 + 'px'


        var level2 = document.querySelector('.lvl2');
        level2.style.fontSize = w1 / 27 + 'px'
        var bonus = document.querySelector('.bonus');
        bonus.style.fontSize = w1 / 26 + 'px'
        var score1 = document.querySelector('.score1');
        score1.style.fontSize = w1 / 25 + "px"

        var highS = document.querySelector('.highS');
        highS.style.fontSize = w1 / 25 + "px"

        var btns = document.querySelector('.btnS');
        btns.style.top = h1 / 4 + 'px';
        // btns.style.paddingTop = w1 / 25 + 'px'
        btns.style.left = w1 / 4 + 'px';
        btns.style.width = w1 / 2 + 'px';
        // btns.style.fontSize = w1 /  + 'px';

        var btn = document.querySelector('.btn');
        btn.style.fontSize = w1 / 20 + 'px';



        var bg1 = document.querySelector(".bg1")
        bg1.style.width = w1 + 'px'
        bg1.style.height = h1 + 'px'

        var st = document.querySelector(".start")
        var over = document.querySelector(".over")
        over.style.fontSize = w1 / 25 + "px"
        var bd = document.querySelector('body')

        st.style.left = w1 / 2 + 'px'
        st.style.top = h1 / 2 + 'px'


        var up1 = document.querySelector('.up1');
        up1.style.left = w1 / 3 + 'px'

        var down1 = document.querySelector('.down1');
        down1.style.left = w1 / 3 + 'px'

        up1.style.visibility = 'hidden'
        down1.style.visibility = 'hidden'

        function start() {
            // con.style.visibility = 'visible'
            // bg1.remove();
            var mus = setInterval(() => {

                ad2.play();
            }, 10)
            bd.classList.remove('bg1')
            up1.style.top = ((h1 - 100) / 3) * 3
            down1.style.top = ((h1 - 100) / 3) * 3

            st.remove();
            bd.classList.add('container')

            up1.style.visibility = 'visible'
            down1.style.visibility = 'visible'




            var can = document.createElement('canvas');
            body.insertBefore(can, body.childNodes[0])
            can.width = w1
            can.height = h1 - 100;
            c = can.getContext('2d')
            k = (h1 - 100) / 3
            class ceiling {
                constructor(x, y, width, height, color) {
                    this.x = x
                    this.y = y
                    this.width = width
                    this.height = height
                    this.color = color


                }
                draw() {
                    c.beginPath();
                    c.rect(0, 0, w1, (h1 - 100) / 3);
                    c.fillStyle = this.color;
                    c.fill()

                }
            }
            var cel1 = new ceiling(0, 0, w1, (h1 - 100) / 3, 'black')
            class ground {
                constructor(x, y, width, height, color) {
                    this.x = x
                    this.y = y
                    this.width = width
                    this.height = height
                    this.color = color
                }
                draw() {
                    c.beginPath();

                    c.rect(0, 2 * ((h1 - 100) / 3), w1, (h1 - 100) / 3);

                    c.fillStyle = this.color
                    c.fill();


                }
            }
            var grd1 = new ground(0, 2 * ((h1 - 100) / 3), w1, (h1 - 100) / 3, 'black')

            y = 2 * ((h1 - 100) / 3) - 30
            class box {
                constructor(x, y, width, height, color, speed) {
                    this.x = x
                    this.y = y
                    this.width = width
                    this.height = height
                    this.color = color
                    this.speed = 2;
                }
                draw1() {
                        // c.rect(this.x, this.y, 30, 30);
                        if (this.y == y) {
                            c.beginPath();
                            c.moveTo(this.x + 15, this.y);
                            c.lineTo(this.x, this.y + 30);
                            c.lineTo(this.x + 30, this.y + 30);
                            c.stroke();
                            c.fillStyle = this.color
                            c.fill();
                            c.closePath();
                        }

                        if (this.y == (h1 - 100) / 3) {
                            c.beginPath();
                            c.moveTo(this.x + 30, k);
                            c.lineTo(this.x + 15, k + 30);
                            c.lineTo(this.x, k);
                            c.stroke();
                            c.fillStyle = this.color
                            c.fill();
                            c.closePath();
                        }
                    }
                    // draw2() {
                    //     c.beginPath();
                    //     c.moveTo(this.x + 30, (this.y + 30) / 2);
                    //     c.lineTo(this.x + 15, (this.y + 30) / 2 + 30);
                    //     c.lineTo(this.x, (this.y + 30) / 2);
                    //     c.stroke();
                    //     c.fillStyle = this.color
                    //     c.fill();
                    //     c.closePath();

                // }
                update() {
                    this.draw1();
                    // this.draw1();
                    // this.draw2();
                    // this.y -= 1;
                }

                upPos() {
                    k = 1;

                    // if (box1.y >= (h1 - 100) / 3) {
                    this.y -= this.speed + k;
                    // this.speed = 0;
                    // }
                }
                k = 0
                downPos() {
                    k = 1;
                    // if (box1.y <= y) {
                    this.y += this.speed + k;
                    // } else {
                    //     this.speed = 0;
                    // }

                }
                k = 0
            }
            y = 2 * ((h1 - 100) / 3) - 30
            var box1 = new box(10, y, 30, 30, 'blue')
                // cel1.draw();
                // grd1.draw();
                // box1.draw();

            class hole {
                constructor(x, y, width, height, color) {
                    this.x = x
                    this.y = y
                    this.width = width
                    this.height = height
                    this.color = color


                }
                draw() {
                    c.beginPath();
                    c.rect(this.x, this.y, this.width, this.height, this.color);
                    c.fillStyle = this.color;
                    c.fill()

                }
                update() {
                    this.draw()
                    setTimeout(() => {


                        this.x -= 5 + scr / 5;
                    }, 0);
                }
            }
            n1 = Math.floor(Math.random() * 5);
            // console.log(n1)
            hy = h1 - 100
            holes = [];



            class Score {
                constructor(x, y, color, width, height, text) {
                    this.x = x;
                    this.y = y;
                    this.width = width;
                    this.height = height;
                    this.text = text;
                    this.color = color


                }
                draw() {
                    c.font = '20px serif'
                    c.font = this.width + " " + this.height;
                    c.fillStyle = this.color;
                    c.fillText(this.text, this.x, this.y);
                    // requestAnimationFrame(draw);
                    // c.drawImage(this.image, this.x, this.y, this.width, this.height)

                }

                update() {
                    this.draw();

                }
            }
            var scr = 0;
            var score = new Score(w1 - 200, 40, "white", "30px", "Consolas", "text");

            // console.log(Math.floor(Math.random() * 2))
            var scr = 0

            class Lavels {
                constructor(x, y, color, width, text) {
                    this.x = x;
                    this.y = y;
                    this.width = width;
                    // this.height = height;
                    this.text = text
                    this.color = color
                    this.alpha = 1;


                }
                draw() {
                    c.save();
                    c.globalAlpha = this.alpha;
                    c.font = '30px serif'
                    c.font = this.width + " " + this.height;
                    c.fillStyle = this.color;
                    c.fillText(this.text, this.x, this.y);
                    c.restore();

                }

                update() {
                    this.draw();
                    this.alpha -= 0.005

                    // this.x += 50; //this.speed //this.x + this.speed;
                }
            }
            var level = 0;
            var lvls = [];


            class dang {
                constructor(x, y, radius, color) {
                    this.x = x
                    this.y = y
                        // this.width = width
                        // this.height = height
                    this.color = color
                    this.radius = radius;

                }
                draw() {
                    c.beginPath();
                    // c.rect(this.x, this.y, this.width, this.height, this.color);
                    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                    c.fillStyle = this.color;
                    c.fill()

                }
                update() {
                    this.draw()
                    setTimeout(() => {

                        this.x -= 6 + scr / 20;
                    }, 0)
                }
            }
            n1 = Math.floor(Math.random() * 5);
            // console.log(n1)
            hy = h1 - 100
            danges = [];

            function anim() {

                requestAnimationFrame(anim)
                    // box1.draw();
                c.clearRect(0, 0, w1, h1)
                cel1.draw();
                grd1.draw();
                box1.update();
                score.text = "Score : " + scr;
                score.update();


                lvls.forEach((Lavels, lvlINdex) => {

                    if (Lavels.alpha <= 0) {
                        lvls.splice(lvlINdex, 1);

                    } else {

                        Lavels.text = "LEVEL : " + level + " Up & " + (level * 2) + " BONUS POINTS";
                        Lavels.update();
                    }

                })


                holes.forEach((hola, holeIndex) => {
                    hola.update();
                    setTimeout(() => {
                            if (hola.x <= -100) {
                                var sc = holes.splice(holeIndex, 1);
                                scr++;
                            }
                            // setInterval(() => {

                            // }, 1000)
                        }, 0)
                        // console.log(hola.x, box1.x)
                    dist = Math.abs(hola.x - box1.x);
                    dist2 = Math.abs((hola.y + hola.height) - box1.y)
                    dist3 = Math.abs(hola.y - (box1.y + box1.width));
                    if (dist < 10 && (dist2 < 5 || dist3 < 5)) {
                        clearInterval(holeMoving);
                        can.remove();
                       
                        over1.play();
                        document.querySelector('.end').style.visibility = 'visible'
                        bd.style.height = h1 + 'px'
                        bd.classList.add('anim')
                            // ad1.paused();
                        up1.style.visibility = 'hidden'
                        down1.style.visibility = 'hidden'
                        clearInterval(mus);
                    }


                });

                danges.forEach((dang, dIndex) => {
                    if (dang.x < -40) {
                        danges.splice(dIndex, 1)
                    } else {
                        dang.update();
                    }
                    dist1 = ((dang.x - dang.radius) - (box1.x + box1.width));
                    dist4 = Math.abs((dang.y) - (box1.y))
                    dist5 = Math.abs((dang.y) - (box1.y + box1.height));
                    // console.log(dist1, dist4, dist5)
                    if (dist1 < 8 && (dist4 <= 20 || dist5 <= 30)) {
                        clearInterval(holeMoving);
                        can.remove();

                        over1.play();

                        document.querySelector('.end').style.visibility = 'visible'
                        bd.style.height = h1 + 'px'
                        bd.classList.add('anim');
                        up1.style.visibility = 'hidden'
                        down1.style.visibility = 'hidden'
                        clearInterval(mus);
                        // ad1.paused();
                        // console.log(dist1, dist4, dist5)

                    }
                })


                if (scr % 10 == 0 && scr > 0) {
                    // lvlup.play();

                    lvls.push(new Lavels(w1 / 4, (h1 - 100) / 4, "lime", w1 / 25, "text"))

                    level = scr / 10;

                    console.log(scr, level)
                }
                if (scr % 30 == 0 && scr > 0) {
                    // setTimeout(() => {

                    dr1 = (Math.floor(Math.random() * (50 - 30)) + 30)
                    hy1 = [((h1 - 100) / 3) + dr1, y + 30 - dr1]
                    n3 = Math.floor(Math.random() * 2);
                    dclr = ['red', 'white', 'green', 'orange']
                    n4 = Math.floor(Math.random() * 5);
                    danges.push(new dang(w1, hy1[n3], dr1, dclr[n4]))
                        // }, 3000)
                        // console.log(scr, level)
                    scr += 1;
                }
                // console.log(scr)


              

                if (level > highlevel) {
                    highlevel = level;

                }
                localStorage.setItem("lvl", highlevel);

                level1.innerHTML = "Level : " + level;
                level2.innerHTML = "Max Level : " + highlevel;
                bonus.innerHTML = "Bonus Points : " + level * 2;



                if (scr + (level * 2) > highscore) {

                    highscore = scr+(level*2);
                }
                var sk = (scr + (level * 2));
                localStorage.setItem("score", highscore);

                score1.innerHTML = "Your Score : " + sk;
                document.querySelector('.highS').innerHTML = " Best Score : " + highscore;
                // console.log(scr)
                // holes.update();
                // if (y - 30 >= box1.y >= (h1 - 100) / 3) {
                //     box1.upPos();
                // }
                // if (y >= box1.y >= (h1 - 100) / 3) {
                //     box1.downPos();
                // }
                // box1.y -= box1.speed;
            }
            anim();
            up1.addEventListener('click', () => {

                box1.y = k;

            })
            down1.addEventListener('click', () => {
                box1.y = y
                    // box1.draw1();

            })




            var holeMoving = setInterval(() => {
                hx1 = (Math.floor(Math.random() * 100) + w1)
                hy1 = [0, hy / 7, hy / 5, hy / 6, hy / 8, 2 * (hy / 3), 2 * (hy / 3), 2 * (hy / 3), 2 * (hy / 3)]
                n1 = Math.floor(Math.random() * 9);
                if (n1 == 7 || n1 == 5 || n1 == 6 || n1 == 8) {
                    h2 = (Math.floor(Math.random() * ((hy / 3) - 100)) + 100)
                } else {
                    h2 = (hy / 3) - hy1[n1];
                }
                var w21

                w2 = (Math.floor(Math.random() * (w1 / 10) - 90) + 90)

                if (w2 > 20) {
                    w21 = w2
                } else if (w2 <= 20) {
                    w21 = (Math.floor(Math.random() * (60 - 40) + 40))
                }

                clr = ['gray', 'white', 'green', 'orange']
                n2 = Math.floor(Math.random() * 5);
                holes.push(new hole(hx1, hy1[n1], w21, h2, clr[n2]))

            }, 1500)


            function anim2() {
                requestAnimationFrame(anim2);

                box1.upPos();
            }



            function anim3() {
                requestAnimationFrame(anim3)
                    // if (box1.y <= y) {
                box1.downPos();
                // }

            }

            // setInterval(anim, 1000)

            // window.addEventListener('click', () => {
            //         // box1.update();
            //         // if (box1.y >= (h1 - 100) / 3) {
            //         anim3();
            //         // }
            //         // if (y >= box1.y) {
            //         //     anim3();
            //         // }
            //         // this.y -= 10;
            //         // console.log(box1.y)
            //     })
            // window.addEventListener('click', () => {
            //         box1.update();
            //         box1.y += 10
            //         console.log(box1.y)
            //     })
            window.addEventListener('keydown', function(e) {
                // if (box1.y + 3 >= (h1 - 100) / 3) {
                if (e.key == 'ArrowUp') {
                    // anim()

                    // ad1.play()
                    // box1.x = 10;
                    box1.y = (h1 - 100) / 3

                }
                // this.y -= 1;
                // box1.update();
                // box1.changePos();
                // console.log(box1.y)
                // }

                if (e.key == 'ArrowDown') {
                    // anim()
                    // box1.draw1();
                    // ad1.play()
                    // if (box1.y <= y) {
                    //     // anim3();

                    box1.y = y;
                    // }
                    // this.y -= 1;
                    // box1.update();
                    // box1.changePos();
                    // console.log(box1.y)
                }
                // console.log(holes.x)
                // }
            })
            setInterval(() => {
                if (box1.y > (h1 - 100) / 3) {
                    window.addEventListener('click', () => {

                        box1.y = (h1 - 100) / 3
                            // ad1.play()

                    })
                } else if (box1.y <= y) {
                    window.addEventListener('click', () => {
                        // ad1.play()
                        box1.y = y

                    })
                }
            }, 0)







        }
 window.addEventListener('resize',() => {
                can.width = w1;
                can.height = h1 - 100;
            })
