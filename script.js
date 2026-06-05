// Performance-focused Quick Dismiss Logic
        window.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                const preloader = document.getElementById('loader-portal');
                const mainApp = document.querySelector('.app-container');
                
                preloader.classList.add('hide-preloader');
                mainApp.classList.remove('hidden-initially');
                mainApp.classList.add('show-interface');
            }, 2000); // Processing time safely reduced to 2 seconds flat
        });

        // Fast-render Canvas Particles Core
        const canvas = document.getElementById('ambient-mesh');
        const ctx = canvas.getContext('2d');
        let points = [];

        function setSize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', setSize);
        setSize();

        class LightNode {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 1.2;
                this.vy = (Math.random() - 0.5) * 1.2;
            }
            run() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
                
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(241, 90, 34, 0.4)';
                ctx.fill();
            }
        }

        for(let i=0; i<30; i++) points.push(new LightNode());

        function engine() {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            points.forEach(p => p.run());
            requestAnimationFrame(engine);
        }
        engine();
