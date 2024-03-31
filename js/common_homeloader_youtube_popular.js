document.addEventListener("DOMContentLoaded", function() {
	fetch('js/yt_data_pop.json')
		.then(response => response.json())
		.then(data => {
			data.slice(0, 3).forEach((item, index) => { // Only process the first three items
				createVideoItempop(item, index);
			});
		})
		.catch(error => console.error('Error fetching data:', error));

	function createVideoItempop(item, index) {
		if (item.title && item.image && item.link) {
			const videoContainer = document.querySelector('.pop');

			const div = document.createElement('div');
			div.classList.add('card', 'full', 'video_post', 'fade-in');
			div.setAttribute('id', `link${index + 1}`);
			div.setAttribute('onclick', `openLink('${item.link}')`);

			div.innerHTML = `
				<p class="copy">${item.date}</p>
				<div class="grid_content">
					<span class="title_divider"></span><h2>${item.title}</h2>
				</div>
				<span class="grid-over-bg"></span>
				<div class="image-banner">
					<img src="${item.image}" alt="Yusatsu Nao, yusatsu nao"/>
				</div>
			`;

			videoContainer.appendChild(div);
		}
	}
});