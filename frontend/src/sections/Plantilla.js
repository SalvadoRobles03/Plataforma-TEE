function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('closed');
  }

const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-input');

// Agrega los listeners para los eventos drag y drop
dropArea.addEventListener('dragover', handleDragOver, false);
dropArea.addEventListener('drop', handleFileSelect, false);

// Agrega el listener para el evento change
fileInput.addEventListener('change', handleFileSelect, false);

// Define la función para el evento dragover
function handleDragOver(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  evt.dataTransfer.dropEffect = 'copy'; // Permite arrastrar y soltar
}

// Define la función para los eventos drop y change
function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  const files = evt.target.files || evt.dataTransfer.files; // Obtiene los archivos

  // Verifica que sean archivos PDF o DOC
  const validMimeTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (validMimeTypes.includes(file.type)) {
      // Aquí puedes agregar tu lógica para procesar el archivo
      console.log('Archivo válido:', file.name);
    }
  }

  // Actualiza el valor del input file
  fileInput.files = files;
}

document.getElementById("uploadForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  var fileInput = document.getElementById("pdfFile");
  var file = fileInput.files[0];

  // Verificar que se haya seleccionado un archivo
  if (!file) {
    alert("Por favor, selecciona un archivo PDF.");
    return;
  }

  // Verificar que el archivo sea un PDF
  if (file.type !== "application/pdf") {
    alert("El archivo seleccionado debe ser un archivo PDF.");
    return;
  }

  // Crear una instancia de FormData para enviar el archivo
  var formData = new FormData();
  formData.append("pdfFile", file);

  // Enviar el archivo al servidor usando XMLHttpRequest o Fetch
  // Aquí puedes personalizar el código para enviar el archivo al servidor
  // y manejar la redirección en el servidor

  // Redirigir a la URL deseada en el cliente
  window.location.href = "";
});

