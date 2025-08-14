document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Sementara: Login langsung (nanti diganti Supabase)
  if (email && password) {
    window.location.href = "dashboard.html";
  } else {
    alert("Harap isi email dan password.");
  }
});
