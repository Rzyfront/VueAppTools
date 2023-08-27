import { reactive } from 'vue';

export const store = reactive({
  params: {
    total: 0,
    tip: 0,
    people: 0,
    remaining: 0
  },
  people: []
});

export function resetStore() {
  store.params = {
    total: 0,
    tip: 0,
    people: 0,
    remaining: 0
  };
  store.people = [];
}

export function getGrandTotal() {
  return store.params.total * (store.params.tip / 100 + 1);
}

export function calculate() {
  const total = store.params.total;
  const tip = store.params.tip;
  const people = store.params.people;
  const totalPerPerson = getGrandTotal() / people;

  store.params.remaining = getGrandTotal();

  for (let i = 0; i < people; i++) {
    store.people.push({
      id: crypto.randomUUID(),
      numberOfPerson: i + 1,
      totalPerPerson,
      paid: false
    });
  }
}

export function calculateRemaining() {
  const missingToPay = store.people.filter((item) => !item.paid);
  const remaining = missingToPay.reduce(
    (acc, item) => (acc += item.totalPerPerson),
    0
  );
  store.params.remaining = remaining;
}

export function pay(id, paid) {
  const person = store.people.find((item) => item.id === id);
  if (person) {
    person.paid = paid;
    calculateRemaining();
  }
}
