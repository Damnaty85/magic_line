if(document.querySelector(".header-new__bottom ul.header__menu li.active")) {
            const activeItem = document.querySelector(".header-new__bottom ul.header__menu li.active")
                 
            newWidth = activeItem.getBoundingClientRect().width
            leftPos = activeItem.offsetLeft
                 
            magicLine.style = `width:${newWidth}px;left:${leftPos}px`;
            magicLine.setAttribute("data-left", magicLine.offsetLeft);
            magicLine.setAttribute("data-width", magicLine.getBoundingClientRect().width);
                 
            menuLinks.forEach(function(item) {
                item.parentNode.addEventListener('mouseover', function() {
                    element = this;
                    newWidth = element.getBoundingClientRect().width
                    leftPos = element.offsetLeft
                    magicLine.style = `width:${newWidth}px;left:${leftPos}px`;
                })
                     
                item.parentNode.addEventListener('mouseout', function() {
                    magicLine.style = `width:${magicLine.dataset.width}px;left:${magicLine.dataset.left}px`;
                })
            })   
        } else {
            magicLine.style = `width:0px;left:0px`;
            menuLinks.forEach(function(item) {
                const _this = item.parentNode;
                _this.addEventListener('mouseover', function() {
                    newWidth = _this.getBoundingClientRect().width;
                    leftPos = _this.offsetLeft;
                    magicLine.style = `width:${newWidth}px;left:${leftPos}px`;
                })
                    
                _this.addEventListener('mouseout', function() {
                    magicLine.style = `width:0px;left:0px`;
                })
            })      
        }
