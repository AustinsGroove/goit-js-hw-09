import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const { delay: formDelay, step: formStep, amount: formAmount } = form.elements;

form.addEventListener('submit', submitHandler);

function submitHandler(ev) {
  ev.preventDefault();

  for (let i = 0; i < Number.parseInt(formAmount.value); i += 1) {
    const position = i + 1;
    const delay =
      Number.parseInt(formDelay.value) + Number.parseInt(formStep.value) * i;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  form.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
