// GALERIA
let crtEstavaAtivo = false;

function openModal(imgElement) {
  // crtEstavaAtivo = document.body.classList.contains("crt");
  // if (crtEstavaAtivo) {
  //   document.body.classList.remove("crt");
  // }

  // Atualiza o src da imagem no modal
  const modalImg = document.getElementById("modal-img");
  modalImg.src = imgElement.src;

  // Pega título e descrição do .image-info do item clicado
  const galleryItem = imgElement.closest('.gallery-item');
  const info = galleryItem ? galleryItem.querySelector('.image-info') : null;
  const title = info ? info.querySelector('b')?.innerText || '' : '';
  const desc = info ? info.querySelectorAll('p')[1]?.innerHTML.replace(/<br\s*\/?>/gi, '\n') || '' : '';

  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalInfo = document.getElementById("modal-info");

  if (title) {
    modalTitle.textContent = title;
    modalTitle.style.display = "";
  } else {
    modalTitle.textContent = "";
    modalTitle.style.display = "none";
  }

  if (desc) {
    modalDesc.textContent = desc;
    modalDesc.style.display = "";
    modalTitle.style.marginBottom = "8px";
  } else {
    modalDesc.textContent = "";
    modalDesc.style.display = "none";
    modalTitle.style.marginBottom = "0";
  }

  // Se ambos estiverem vazios, esconde o modal-info inteiro
  if (!title && !desc) {
    modalInfo.style.display = "none";
  } else {
    modalInfo.style.display = "";
  }

  const modal = document.getElementById("modal");
  modal.classList.remove("modal-closing");
  modal.style.display = "flex";
  // Força reflow para reiniciar animação
  void modal.offsetWidth;
  modal.classList.add("modal-open");
  document.body.style.overflow = "hidden";
  document.getElementById("toggleClassBtn").style.display = "none";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("modal-open");
  modal.classList.add("modal-closing");
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("modal-closing");
    document.getElementById("modal-img").src = "";
    document.getElementById("modal-title").textContent = "";
    document.getElementById("modal-desc").textContent = "";
    document.body.style.overflow = "";
    document.getElementById("toggleClassBtn").style.display = "block";
    if (crtEstavaAtivo) {
      document.body.classList.add("crt");
    }
  }, 220); // igual ao tempo do fade-out
}

// Seleciona todas as imagens dentro da galeria
const galleryImages = document.querySelectorAll(".gallery-item img");

// Adiciona o evento de clique em cada imagem da galeria
galleryImages.forEach(function (img) {
  img.addEventListener("click", function () {
    if (!img.classList.contains("thumbnail")) {
      openModal(this); // Passa o elemento da imagem clicada
    }
  });
});

// SCROLL HORIZONTAL

// Variáveis
var scrollSpeed = 4;
var friction = 0.9;

// Seleciona todas as galerias
var galleries = $(".gallery");

// Define "vertical" como padrão para galerias sem tipo especificado
galleries.each(function () {
  if (!$(this).hasClass("horizontal") && !$(this).hasClass("vertical")) {
    $(this).addClass("vertical"); // Adiciona a classe "vertical" como padrão
  }
});

// Seleciona apenas as galerias horizontais
var galleryContainer = $(".gallery.horizontal");

galleryContainer.on("wheel", function (e) {
  e.preventDefault();

  // Calcula o valor da rolagem horizontal com base no scroll
  var delta = e.originalEvent.deltaY * scrollSpeed;

  // Atualiza a rolagem horizontal diretamente
  $(this).scrollLeft($(this).scrollLeft() + delta);

  // Aplica a desaceleração com o tempo
  delta *= friction;

  // Se a velocidade for muito pequena, para a rolagem
  if (Math.abs(delta) < 0.1) {
    delta = 0;
  }
});

// Adiciona o evento para fechar o modal ao clicar fora do conteúdo
document.getElementById("modal").addEventListener("click", function(e) {
  // Só fecha se o clique for fora do modal-info e da imagem
  if (
    e.target === this ||
    e.target === document.getElementById("modal-img")
  ) {
    closeModal();
  }
});