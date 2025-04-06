<script setup>
const isHovered = ref(false);
const hoveredPlanet = ref(null);
const rotation = ref(0);
const speed = ref(0.05);
let animationFrame;

// Используем фиксированные углы для предотвращения ошибок гидратации
const miniPlanetAngles = [0, 90, 180, 270];
const largePlanetAngles = [45, 135, 225, 315];

// Добавляем реактивную переменную для отслеживания ширины окна
const windowWidth = ref(0);

const planetsMini = [
	{
		id: 1,
		img: "/img/planets/1.png",
		angle: miniPlanetAngles[0],
		name: "Cosmic Voyager",
		price: "0.45 ETH",
		creator: "AstralArtist",
	},
	{
		id: 2,
		img: "/img/planets/2.png",
		angle: miniPlanetAngles[1],
		name: "Nebula Dream",
		price: "0.32 ETH",
		creator: "StardustCreator",
	},
	{
		id: 3,
		img: "/img/planets/3.png",
		angle: miniPlanetAngles[2],
		name: "Quantum Realm",
		price: "0.56 ETH",
		creator: "DigitalNomad",
	},
	{
		id: 4,
		img: "/img/planets/4.png",
		angle: miniPlanetAngles[3],
		name: "Celestial Harmony",
		price: "0.41 ETH",
		creator: "CosmicDesigner",
	},
];

const planetsLarge = [
	{
		id: 5,
		img: "/img/planets/5.png",
		angle: largePlanetAngles[0],
		name: "Galactic Guardian",
		price: "0.78 ETH",
		creator: "SpaceWanderer",
	},
	{
		id: 6,
		img: "/img/planets/6.png",
		angle: largePlanetAngles[1],
		name: "Astral Projection",
		price: "0.63 ETH",
		creator: "EtherealArtist",
	},
	{
		id: 7,
		img: "/img/planets/7.png",
		angle: largePlanetAngles[2],
		name: "Interstellar Voyage",
		price: "0.89 ETH",
		creator: "CryptoVoyager",
	},
	{
		id: 8,
		img: "/img/planets/8.png",
		angle: largePlanetAngles[3],
		name: "Cosmic Artifact",
		price: "0.52 ETH",
		creator: "NFTExplorer",
	},
];

// Реактивные значения для адаптивных размеров орбит
const miniOrbitRadius = computed(() => {
	if (windowWidth.value <= 850) {
		return 230; // Уменьшенное значение для мобильных устройств
	} else if (windowWidth.value <= 1200) {
		return 295; // Для планшетов
	}
	return 415; // Для десктопа
});

const largeOrbitRadius = computed(() => {
	if (windowWidth.value <= 850) {
		return 295; // Уменьшенное значение для мобильных устройств
	} else if (windowWidth.value <= 1200) {
		return 375; // Для планшетов
	}
	return 530; // Для десктопа
});

function animate() {
	if (!isHovered.value && speed.value < 0.05) {
		speed.value += 0.001;
	} else if (isHovered.value && speed.value > 0) {
		speed.value -= 0.001;
	}
	if (speed.value < 0) speed.value = 0;
	rotation.value += speed.value;
	animationFrame = requestAnimationFrame(animate);
}

function handlePlanetHover(planet) {
	isHovered.value = true;
	hoveredPlanet.value = planet;
}

function handlePlanetLeave() {
	// Добавляем задержку, чтобы успеть навести на карточку
	setTimeout(() => {
		// Проверяем, не навели ли мы на карточку
		if (!document.querySelector(".orbit__info-card:hover")) {
			isHovered.value = false;
			hoveredPlanet.value = null;
		}
	}, 100);
}

function handleCardLeave() {
	isHovered.value = false;
	hoveredPlanet.value = null;
}

// Функция для обновления ширины окна
function updateWindowWidth() {
	windowWidth.value = window.innerWidth;
}

// Вычисляемое свойство для определения позиции информационной карточки
const infoCardPosition = computed(() => {
	if (!hoveredPlanet.value) return {};

	// Определяем, с какой орбиты планета
	const isLargeOrbit = planetsLarge.some(
		(p) => p.id === hoveredPlanet.value.id
	);

	// Вычисляем угол в радианах
	const angleRad =
		(hoveredPlanet.value.angle + rotation.value) * (Math.PI / 180);

	// Радиус орбиты
	const radius = isLargeOrbit
		? largeOrbitRadius.value
		: miniOrbitRadius.value;

	// Вычисляем позицию
	const x = Math.cos(angleRad) * radius;
	const y = Math.sin(angleRad) * radius;

	return {
		transform: `translate(${x}px, ${y}px)`,
	};
});

onMounted(() => {
	// Инициализируем ширину окна
	updateWindowWidth();

	animate();

	// Добавляем обработчик изменения размера окна
	window.addEventListener("resize", updateWindowWidth);
});

onUnmounted(() => {
	cancelAnimationFrame(animationFrame);
	window.removeEventListener("resize", updateWindowWidth);
});
</script>

<template>
	<div class="orbit">
		<div class="orbit__wrapper">
			<h2 class="orbit__title">Join The<br /><span>Community</span></h2>
			<h4 class="orbit__subtitle">
				Our vibrant community is full of collectors, artists, and
				enthusiasts<br />
				who share a passion for one-of-a-kind digital.
			</h4>
			<UiButton>Join Our Community</UiButton>
			<!-- Центр вращения -->
			<div class="orbit__center">
				<!-- Иконки орбит -->
				<IconsOrbitMini class="orbit__circle orbit__circle--mini" />
				<IconsOrbitLarge class="orbit__circle orbit__circle--large" />

				<!-- Малый круг (830x830) -->
				<div class="orbit__track orbit__track--mini">
					<div
						v-for="planet in planetsMini"
						:key="planet.id"
						class="orbit__planet"
						:style="{
							transform:
								'rotate(' +
								(rotation + planet.angle) +
								'deg) translate(' +
								miniOrbitRadius +
								'px) rotate(-' +
								(rotation + planet.angle) +
								'deg)',
						}"
						@mouseenter="handlePlanetHover(planet)"
						@mouseleave="handlePlanetLeave"
					>
						<nuxt-link
							:to="`#nft-${planet.id}`"
							class="orbit__planet-link"
						>
							<img :src="planet.img" alt="planet" />
						</nuxt-link>
					</div>
				</div>

				<!-- Большой круг (1060x1060) -->
				<div class="orbit__track orbit__track--large">
					<div
						v-for="planet in planetsLarge"
						:key="planet.id"
						class="orbit__planet"
						:style="{
							transform:
								'rotate(' +
								(rotation + planet.angle) +
								'deg) translate(' +
								largeOrbitRadius +
								'px) rotate(-' +
								(rotation + planet.angle) +
								'deg)',
						}"
						@mouseenter="handlePlanetHover(planet)"
						@mouseleave="handlePlanetLeave"
					>
						<nuxt-link
							:to="`#nft-${planet.id}`"
							class="orbit__planet-link"
						>
							<img :src="planet.img" alt="planet" />
						</nuxt-link>
					</div>
				</div>

				<!-- Информационная карточка NFT -->
				<div
					v-if="hoveredPlanet"
					class="orbit__info-card"
					:style="infoCardPosition"
					@mouseleave="handleCardLeave"
				>
					<div class="orbit__info-card-content">
						<h3 class="orbit__info-card-title">
							{{ hoveredPlanet.name }}
						</h3>
						<p class="orbit__info-card-price">
							{{ hoveredPlanet.price }}
						</p>
						<p class="orbit__info-card-creator">
							by {{ hoveredPlanet.creator }}
						</p>
						<a
							:href="`#nft-${hoveredPlanet.id}`"
							class="orbit__info-card-action"
							>View Details</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
.orbit {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	padding: 480px 0;
	overflow: visible;

	@media (max-width: 1200px) {
		padding: 380px 0;
	}

	@media (max-width: 850px) {
		padding: 280px 0;
	}

	&__wrapper {
		position: relative;
		text-align: center;
		z-index: 5;
	}

	&__title {
		font-size: 2.5rem;
		font-weight: bold;

		@media (max-width: 1200px) {
			font-size: 32px;
			line-height: 38.69px;
		}

		@media (max-width: 850px) {
			font-size: 22.01px;
			line-height: 26.61px;
		}

		span {
			color: #aaa;
		}
	}

	&__subtitle {
		margin-top: 1rem;
		margin-bottom: 2rem;
		color: #666;
		font-weight: 500;
		font-size: 1rem;

		@media (max-width: 1200px) {
			font-size: 12.8px;
			line-height: 22.76px;
		}

		@media (max-width: 850px) {
			font-size: 8.8px;
			line-height: 15.65px;
		}
	}

	&__center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 1060px;
		height: 1060px;
		pointer-events: none; /* Добавляем это, чтобы центр не блокировал события */

		@media (max-width: 1200px) {
			width: 750px;
			height: 750px;
		}

		@media (max-width: 850px) {
			width: 590px;
			height: 590px;
		}
	}

	/* Иконки орбит */
	&__circle {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
		pointer-events: none; /* Орбиты не должны перехватывать события */

		@media (max-width: 1200px) {
			transform: translate(-50%, -50%) scale(0.71);
		}

		@media (max-width: 850px) {
			transform: translate(-50%, -50%) scale(0.56);
		}
	}

	/* Контейнеры орбит с фиксированными размерами */
	&__track {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		pointer-events: none;

		&--mini {
			width: 830px;
			height: 830px;
			z-index: 10;

			@media (max-width: 1200px) {
				width: 590px;
				height: 590px;
			}

			@media (max-width: 850px) {
				width: 460px;
				height: 460px;
			}
		}

		&--large {
			width: 1060px;
			height: 1060px;
			z-index: 9;

			@media (max-width: 1200px) {
				width: 750px;
				height: 750px;
			}

			@media (max-width: 850px) {
				width: 590px;
				height: 590px;
			}
		}
	}

	/* Планеты */
	&__planet {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 20;
		transition: transform 0.1s linear;
		transform-origin: center;
		margin-top: -20px;
		margin-left: -20px;
		pointer-events: auto; /* Явно разрешаем события для планет */

		@media (max-width: 850px) {
			margin-top: -15px;
			margin-left: -15px;
		}

		&-link {
			display: block;
			cursor: pointer;
			width: 40px;
			height: 40px;
			position: relative;
			z-index: 21;

			@media (max-width: 850px) {
				width: 30px;
				height: 30px;
			}

			&:hover {
				img {
					transform: scale(1.2);
					filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.7));
				}
			}
		}

		img {
			width: 40px;
			height: 40px;
			object-fit: contain;
			transition: transform 0.3s ease, filter 0.3s ease;
			position: relative;
			z-index: 22;

			@media (max-width: 850px) {
				width: 30px;
				height: 30px;
			}
		}
	}

	/* Информационная карточка NFT */
	&__info-card {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 30;
		pointer-events: auto;

		&-content {
			position: relative;
			width: 180px;
			background: rgba(20, 20, 30, 0.85);
			backdrop-filter: blur(5px);
			border-radius: 12px;
			padding: 15px;
			box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
			transform: translate(-50%, -120%);

			@media (max-width: 1200px) {
				width: 160px;
				padding: 12px;
			}

			@media (max-width: 850px) {
				width: 140px;
				padding: 10px;
			}

			&::after {
				content: "";
				position: absolute;
				bottom: -10px;
				left: 50%;
				transform: translateX(-50%);
				width: 0;
				height: 0;
				border-left: 10px solid transparent;
				border-right: 10px solid transparent;
				border-top: 10px solid rgba(20, 20, 30, 0.85);
			}
		}

		&-title {
			color: white;
			font-size: 1rem;
			font-weight: 600;
			margin: 0 0 8px;

			@media (max-width: 850px) {
				font-size: 0.9rem;
				margin: 0 0 6px;
			}
		}

		&-price {
			color: #6fcfff;
			font-weight: 700;
			font-size: 0.9rem;
			margin: 0 0 5px;

			@media (max-width: 850px) {
				font-size: 0.8rem;
				margin: 0 0 4px;
			}
		}

		&-creator {
			color: #aaa;
			font-size: 0.8rem;
			margin: 0 0 10px;

			@media (max-width: 850px) {
				font-size: 0.7rem;
				margin: 0 0 8px;
			}
		}

		&-action {
			display: block;
			background: linear-gradient(90deg, #3a7bd5, #00d2ff);
			color: white;
			font-size: 0.8rem;
			font-weight: 600;
			padding: 6px 0;
			border-radius: 6px;
			text-align: center;
			transition: opacity 0.2s ease;
			text-decoration: none;
			pointer-events: auto; // Разрешаем взаимодействие с кнопкой

			@media (max-width: 850px) {
				font-size: 0.7rem;
				padding: 5px 0;
			}

			&:hover {
				opacity: 0.9;
			}
		}
	}
}
</style>
