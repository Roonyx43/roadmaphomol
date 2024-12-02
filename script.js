document.getElementById('aboutHtml').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do label
    document.getElementById('modal').style.display = 'flex'; // Mostra o modal
  });
  
  document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none'; // Esconde o modal
  });
  
  // Fecha o modal se clicar fora dele
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

document.getElementById('aboutCss').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do label
    document.getElementById('modal2').style.display = 'flex'; // Mostra o modal
  });
  
  document.getElementById('closeModal2').addEventListener('click', function() {
    document.getElementById('modal2').style.display = 'none'; // Esconde o modal
  });
  
  // Fecha o modal se clicar fora dele
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal2');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });


document.getElementById('aboutJs').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do label
    document.getElementById('modal3').style.display = 'flex'; // Mostra o modal
  });
  
  document.getElementById('closeModal3').addEventListener('click', function() {
    document.getElementById('modal3').style.display = 'none'; // Esconde o modal
  });
  
  // Fecha o modal se clicar fora dele
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal3');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
document.getElementById('aboutDOM').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do label
    document.getElementById('modal4').style.display = 'flex'; // Mostra o modal
  });
  
  document.getElementById('closeModal4').addEventListener('click', function() {
    document.getElementById('modal4').style.display = 'none'; // Esconde o modal
  });
  
  // Fecha o modal se clicar fora dele
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal4');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
    
document.getElementById('aboutSEO').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do label
    document.getElementById('modal5').style.display = 'flex'; // Mostra o modal
  });
  
  document.getElementById('closeModal5').addEventListener('click', function() {
    document.getElementById('modal5').style.display = 'none'; // Esconde o modal
  });
  
  // Fecha o modal se clicar fora dele
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal5');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

      
document.getElementById('aboutDesign').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do label
    document.getElementById('modal6').style.display = 'flex'; // Mostra o modal
  });
  
  document.getElementById('closeModal6').addEventListener('click', function() {
    document.getElementById('modal6').style.display = 'none'; // Esconde o modal
  });
  
  // Fecha o modal se clicar fora dele
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal6');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

document.getElementById('desafioHTML').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do label
    document.getElementById('modalDesafioHTML').style.display = 'flex'; // Mostra o modal
  });
  
  document.getElementById('closeDesafioHTML').addEventListener('click', function() {
    document.getElementById('modalDesafioHTML').style.display = 'none'; // Esconde o modal
  });
  
  // Fecha o modal se clicar fora dele
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('modalDesafioHTML');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  document.getElementById('desafioCSS').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do label
    document.getElementById('modalDesafioCSS').style.display = 'flex'; // Mostra o modal
  });
  
  document.getElementById('closeDesafioCSS').addEventListener('click', function() {
    document.getElementById('modalDesafioCSS').style.display = 'none'; // Esconde o modal
  });
  
  // Fecha o modal se clicar fora dele
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('modalDesafioCSS');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });


  document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    // Carregar os estados dos checkboxes do localStorage
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState !== null) {
            checkbox.checked = JSON.parse(savedState);
        }

        // Adicionar evento para salvar o estado no localStorage ao alterar
        checkbox.addEventListener("change", () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
            updateProgress("html");
            updateProgress("css");
            updateProgress("js")
            updateProgress("dom")
            updateProgress("seo")
            updateProgress("design") // Atualiza a barra de progresso ao mudar o checkbox
            updateProgress("all")
        });
    });

    // Atualizar a barra de progresso inicial ao carregar a página
    updateProgress("html");
    updateProgress("css")
    updateProgress("js")
    updateProgress("dom")
    updateProgress("seo")
    updateProgress("design")
    updateProgress("all")
});

function updateProgress(section) {
  const checkboxes = document.querySelectorAll(`.${section}-checkbox`);
  const total = checkboxes.length;
  const checked = Array.from(checkboxes).filter(cb => cb.checked).length;

  const progressPercent = Math.round((checked / total) * 100);

  document.getElementById(`${section}-progress`).style.width = `${progressPercent}%`;
  document.getElementById(`${section}-progress-text`).textContent = `${progressPercent}%`;
}

// Adicionar eventos a cada checkbox do HTML
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".html-checkbox");
  const progressBar = document.getElementById("html-progress");
  const progressText = document.getElementById("html-progress-text");

  function updateProgress() {
      const total = checkboxes.length;
      const checked = document.querySelectorAll(".html-checkbox:checked").length;
      const percentage = Math.round((checked / total) * 100);

      progressBar.style.width = percentage + "%";
      progressText.textContent = percentage + "%";
  }

  checkboxes.forEach((checkbox) =>
      checkbox.addEventListener("change", updateProgress)
  );
});

// Adicionar eventos a cada checkbox do CSS
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".css-checkbox");
  const progressBar = document.getElementById("css-progress");
  const progressText = document.getElementById("css-progress-text");

  function updateProgress() {
      const total = checkboxes.length;
      const checked = document.querySelectorAll(".css-checkbox:checked").length;
      const percentage = Math.round((checked / total) * 100);

      progressBar.style.width = percentage + "%";
      progressText.textContent = percentage + "%";
  }

  checkboxes.forEach((checkbox) =>
      checkbox.addEventListener("change", updateProgress)
  );
});

// Adicionar eventos a cada checkbox do JS
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".js-checkbox");
  const progressBar = document.getElementById("js-progress");
  const progressText = document.getElementById("js-progress-text");

  function updateProgress() {
      const total = checkboxes.length;
      const checked = document.querySelectorAll(".js-checkbox:checked").length;
      const percentage = Math.round((checked / total) * 100);

      progressBar.style.width = percentage + "%";
      progressText.textContent = percentage + "%";
  }

  checkboxes.forEach((checkbox) =>
      checkbox.addEventListener("change", updateProgress)
  );
});

// Adicionar eventos a cada checkbox do JS
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".dom-checkbox");
  const progressBar = document.getElementById("dom-progress");
  const progressText = document.getElementById("dom-progress-text");

  function updateProgress() {
      const total = checkboxes.length;
      const checked = document.querySelectorAll(".dom-checkbox:checked").length;
      const percentage = Math.round((checked / total) * 100);

      progressBar.style.width = percentage + "%";
      progressText.textContent = percentage + "%";
  }

  checkboxes.forEach((checkbox) =>
      checkbox.addEventListener("change", updateProgress)
  );
});

// Adicionar eventos a cada checkbox do JS
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".seo-checkbox");
  const progressBar = document.getElementById("seo-progress");
  const progressText = document.getElementById("seo-progress-text");

  function updateProgress() {
      const total = checkboxes.length;
      const checked = document.querySelectorAll(".seo-checkbox:checked").length;
      const percentage = Math.round((checked / total) * 100);

      progressBar.style.width = percentage + "%";
      progressText.textContent = percentage + "%";
  }

  checkboxes.forEach((checkbox) =>
      checkbox.addEventListener("change", updateProgress)
  );
});

// Adicionar eventos a cada checkbox do JS
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".design-checkbox");
  const progressBar = document.getElementById("design-progress");
  const progressText = document.getElementById("design-progress-text");

  function updateProgress() {
      const total = checkboxes.length;
      const checked = document.querySelectorAll(".design-checkbox:checked").length;
      const percentage = Math.round((checked / total) * 100);

      progressBar.style.width = percentage + "%";
      progressText.textContent = percentage + "%";
  }

  checkboxes.forEach((checkbox) =>
      checkbox.addEventListener("change", updateProgress)
  );
});

// Adicionar eventos a cada checkbox do JS
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".contCheck");
  const progressBar = document.getElementById("all-progress");
  const progressText = document.getElementById("all-progress-text");

  function updateProgress() {
      const total = checkboxes.length;
      const checked = document.querySelectorAll(".contCheck:checked").length;
      const percentage = Math.round((checked / total) * 100);

      progressBar.style.width = percentage + "%";
      progressText.textContent = percentage + "%";
  }

  checkboxes.forEach((checkbox) =>
      checkbox.addEventListener("change", updateProgress)
  );
});