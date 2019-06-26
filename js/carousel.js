class Carousel {
    constructor(element) {
        this.el = element;
        this.leftButton = this.el.querySelector('.left-button');
        this.rightButton = this.el.querySelector('.right-button');
        this.testimonial = this.el.querySelectorAll('.testimonial')
        this.index = 0;
        this.rightButton.addEventListener('click', () => this.goRight());
        this.leftButton.addEventListener('click', () => this.goLeft());
        this.testimonialArray = Array.from(this.testimonial).map( testimonial => new CurrentImg(testimonial));
    }
  
    goLeft() {
        this.testimonial[this.index].style.display = 'none';
        if (this.index === 0) {
            this.index = this.testimonial.length - 1;
        } else {
            this.index--;
        }
  
        this.testimonial[this.index].style.display = 'flex';
        this.testimonialArray.forEach( (test, index) => {
            if (index !== this.index) {
                test.hide();
            }
        });
        this.testimonialArray[this.index].show();
        TweenMax.fromTo(".testimonial", 0.5, {x:900}, {x:0, ease:Back.easeOut}, );
    }
    goRight() {
        this.testimonial[this.index].style.display = 'none';
        if (this.index < this.testimonial.length - 1) {
            this.index ++;
        } else {
            this.index = 0;
        }
        this.testimonial[this.index].style.display = 'flex';
        this.testimonialArray.forEach((test, index) => {
            if (index !== this.index) {
                test.hide();
            }
        });
        this.testimonialArray[this.index].show();
        TweenMax.fromTo(".testimonial", 0.5, {x:-900}, {x:0, ease:Back.easeOut}, );
    }
  }
  
  
  class CurrentImg {
    constructor(testimonial) {
        this.testimonial = testimonial;
    }
    show() {
        this.testimonial.style.display = 'flex';
        this.testimonial.classList.add('fadeIn');
    }
    hide() {
        this.testimonial.style.display = 'none';
    }
  }
  
  let carousel = document.querySelector('.carousel');
  new Carousel(carousel);
  
  
  