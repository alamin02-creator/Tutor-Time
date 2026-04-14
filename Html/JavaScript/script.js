function switchForm(formName) {
  
  
  const loginSection = document.getElementById('login-section');
  const signupSection = document.getElementById('signup-section');
  const subtitleText = document.getElementById('auth-subtitle');

  
  if (formName === 'signup') {
    loginSection.classList.add('hidden');
    signupSection.classList.remove('hidden');
    subtitleText.innerText = "Create an account to get started.";
  } 
  
  
  else {
    signupSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
    subtitleText.innerText = "Welcome back! Please enter your details.";
  }
}