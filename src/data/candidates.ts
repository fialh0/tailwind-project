export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

interface GetCandidateFilters {
  id: string | null;
  firstName: string | null;
}

export async function getCandidates({ id, firstName }: GetCandidateFilters) {
  // Delay de 1s para simular a chamada de uma API
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let candidates = [
    { id: "1", firstName: "João", lastName: "Silva", age: 25 },
    { id: "2", firstName: "Maria", lastName: "Oliveira", age: 30 },
    { id: "3", firstName: "Carlos", lastName: "Ferreira", age: 22 },
    { id: "4", firstName: "Ana", lastName: "Santos", age: 28 },
    { id: "5", firstName: "Lucas", lastName: "Almeida", age: 26 },
    { id: "6", firstName: "Julia", lastName: "Ribeiro", age: 23 },
    { id: "7", firstName: "Pedro", lastName: "Costa", age: 35 },
    { id: "8", firstName: "Camila", lastName: "Pereira", age: 29 },
    { id: "9", firstName: "Felipe", lastName: "Martins", age: 32 },
    { id: "10", firstName: "Isabela", lastName: "Barbosa", age: 27 },
    { id: "11", firstName: "Gabriel", lastName: "Lima", age: 24 },
    { id: "12", firstName: "Larissa", lastName: "Gomes", age: 31 },
    { id: "13", firstName: "Rafael", lastName: "Mendes", age: 33 },
    { id: "14", firstName: "Fernanda", lastName: "Dias", age: 28 },
    { id: "15", firstName: "Diego", lastName: "Nunes", age: 26 },
    { id: "16", firstName: "Tatiane", lastName: "Lopes", age: 29 },
    { id: "17", firstName: "Vinícius", lastName: "Cruz", age: 34 },
    { id: "18", firstName: "Amanda", lastName: "Souza", age: 25 },
    { id: "19", firstName: "Eduardo", lastName: "Rocha", age: 30 },
    { id: "20", firstName: "Luana", lastName: "Machado", age: 27 },
  ];

  if (id) {
    candidates = candidates.filter((candidate) => candidate.id.includes(id));
  }

  if (firstName) {
    candidates = candidates.filter((candidate) =>
      candidate.firstName.includes(firstName)
    );
  }

  return candidates;
}

interface CreateCandidateRequest {
  firstName: string;
  lastName: string;
  age: number;
}

export async function createCandidateRequest(data: CreateCandidateRequest) {
  // Delay de 1s para simular a chamada de uma API
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    id: crypto.randomUUID(),
    firstName: data.firstName,
    lastName: data.lastName,
    age: data.age,
  };
}
