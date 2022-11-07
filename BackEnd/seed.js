import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const firstData = await prisma.user.upsert({
    where: { name: 'Cristiano' },
    update: {},
    create: {
      name: 'Cristiano',
      description: 'Front-End',
      gitHub: 'CristianoLagesf',
      playlist: {
        create: [
          {
            title: 'Frostpunk - Neve e Steak tartare',
            url: 'https://www.youtube.com/watch?v=QsqatJxAUtk',
            thumb: 'https://img.youtube.com/vi/QsqatJxAUtk/hqdefault.jpg',
            category: 'Games'
          },
          {
            title: "Frostpunk - Neve e Steak tartare",
            url: "https://www.youtube.com/watch?v=O8jtAyPuhNg",
            thumb: "https://img.youtube.com/vi/O8jtAyPuhNg/hqdefault.jpg",
            category: 'Games'
          },
          {
            title: "Gas Station Simulator - 8 dias sem dormir!",
            url: "https://www.youtube.com/watch?v=R1d0DyRDG_Q",
            thumb: "https://img.youtube.com/vi/R1d0DyRDG_Q/hqdefault.jpg",
            category: 'Games'
          },
          {
            title: "Gartic Phone - Não assista a esse NerdPlayer!",
            url: "https://www.youtube.com/watch?v=0oJQUs5oRiM",
            thumb: "https://img.youtube.com/vi/0oJQUs5oRiM/hqdefault.jpg",
            category: 'Games'
          },
          {
            title: "Netdecking Estraga o Magic?",
            url: "https://www.youtube.com/watch?v=dXihyhYEsEc",
            thumb: "https://img.youtube.com/vi/dXihyhYEsEc/hqdefault.jpg",
            category: 'Games'
          },
          {
            title: "Jogo com JavaScript #01: Criando um Flappy Bird do ZERO!!!",
            url: "https://youtube.com/watch?v=jOAU81jdi-c",
            thumb: "https://img.youtube.com/vi/jOAU81jdi-c/hqdefault.jpg",
            category: 'Front-End'
          },
          {
            title: "Jogo com JavaScript #01: Criando um Flappy Bird do ZERO!!!",
            url: "https://www.youtube.com/watch?v=llF6vD-RljE",
            thumb: "https://img.youtube.com/vi/llF6vD-RljE/hqdefault.jpg",
            category: 'Front-End'
          },
          {
            title: "A Primeira Aula de Flutter Que Todo Mundo Deveria Ter",
            url: "https://www.youtube.com/watch?v=J4BVaXkwmM8",
            thumb: "https://img.youtube.com/vi/J4BVaXkwmM8/hqdefault.jpg",
            category: 'Front-End'
          },
          {
            title: "O QUE SÃO FRAMEWORKS E BIBLIOTECAS? QUAIS AS DIFERENÇAS?",
            url: "https://www.youtube.com/watch?v=dp0zB4n3MUs",
            thumb: "https://img.youtube.com/vi/dp0zB4n3MUs/hqdefault.jpg",
            category: 'Front-End'
          },
          {
            title: "Angular (O Vídeo que Você Precisava para Começar no Framework) // Dicionário do Programador",
            url: "https://www.youtube.com/watch?v=Yf0rC7dERjg",
            thumb: "https://img.youtube.com/vi/Yf0rC7dERjg/hqdefault.jpg",
            category: 'Front-End'
          },
          {
            title: "Como Foi Programado um App Que Faz Mágica",
            url: "https://www.youtube.com/watch?v=I36seuWUe5s",
            thumb: "https://img.youtube.com/vi/I36seuWUe5s/hqdefault.jpg",
            category: 'Front-End'
          },
        ]
      },
    },
  })
  console.log(firstData)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })