export const filterId = (data) => {
  let id= data.results.filter(result => result.id);
   console.log(id)
 }

export const filterName = (data) => {
  let name= data.results.filter(result => result.name);
   console.log(name)
 }
 
 // STATUS
 export const filterAlive=(data) =>{
  let alive=data.results.filter(result=>result.status=="Alive")
  console.log(alive)
}
export const filterDead=(data)=>{
  let dead=data.results.filter(result=>result.status=="Dead")
  console.log(dead)
}
export const filterUnknown1=(data)=>{
  let unknown=data.results.filter(result=>result.status=="unknown")
  console.log(unknown)
}

// SPECIES
export const filterHuman = (data) => {
  let human= data.results.filter(result => result.species==="Human");
   console.log(human)
 }
 
 export const filterAlien =(data )=>{
   let alien= data.results.filter(result =>result.species=="Alien")
   console.log(alien)
 }
 
export const filterHumanoid=(data)=>{
  let humanoid=data.results.filter(result=>result.species=="Humanoid")
  console.log(humanoid)
}
  export const filterPoopybutthole=(data)=>{
    let poopybutthole=data.results.filter(result=>result.species=="Poopybutthole")
    console.log(poopybutthole)
  }
  
  export const filterUnknown=(data) =>{
    let unknown=data.results.filter(result=>result.species=="unknown")
    console.log(unknown)
  }

  
// GENDER
  export const filterMale=(data)=>{
    let gender=data.results.filter(result=>result.gender=="Male")
    console.log(gender)
  }
  export const filterFemale=(data)=>{
    let female=data.results.filter(result=>result.gender=="Female")
    console.log(female)
  }
  export const filterUnknown2=(data)=>{
    let unknown=data.results.filter(result=>result.gender=="unknown")
    console.log(unknown)
  }

  // export const filterImage = (data) => {
  //   let image= data.results.filter(result => result.image);
  //    console.log(image)
  //  }