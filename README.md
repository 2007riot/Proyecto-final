# Adopta Amor

Adopta Amor is a website where you can adopt an animal from a local shelter in Barcelona. The idea for this project was born out of a profound sensitivity to the plight of abandoned and helpless animals.


### Technologies
`JavaScript` and `React`

### Preview

#### Main view
<img width="900" alt="Screenshot 2024-01-29 at 10 00 53" src="https://github.com/2007riot/Proyecto-final/assets/73304608/07153c1e-3b5a-4a77-ae6e-676b7c6b9084">

#### Adoptar view

<img width="900" alt="Screenshot 2024-01-29 at 10 35 54" src="https://github.com/2007riot/Proyecto-final/assets/73304608/a2f0067c-ef00-403c-b0df-0c1d63a81042">

#### Animal view

<img width="900" alt="Screenshot 2024-01-29 at 10 32 01" src="https://github.com/2007riot/Proyecto-final/assets/73304608/c062000d-961e-4fb9-845c-d51685934d3f">

#### Donate animal view
<img width="900" alt="Screenshot 2024-01-29 at 10 13 44" src="https://github.com/2007riot/Proyecto-final/assets/73304608/676f76a5-c66f-4738-9df9-67bc0cfc8114">

#### Features
Users can view a list of animals available for adoption, filter by animal type, size, and age. Additionally, users have the option to offer their animals for adoption by providing the necessary information. They can also delete or edit animals from the database.

### How to Install and Run the Project
In order to run the project, you need VSCode and Node.js installed on your machine.
After cloning the repo, run the following commands: 

```
npm install 
npm start
npm run dev
```
`npm install` - to install all dependencies

`npm start` - to run JSON-server 

`npm run dev` - to run the project in the browser

### Main implementation

#### Create a Browser Router and routes configuration

```javascript
export const router = createBrowserRouter( [ {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/adoptar",
            element: <Adoptar />
        },
        {
            path: `/animal-info/:id`,
            element: <AnimalInfo />
        },
        {
            path: "/casita",
            element: <Casita />
        },
        {
            path: "/donar",
            element: <Donar />
        },
        {
            path: "/sobreNosotras",
            element: <SobreNosotras />
        },
        {
            path: "/contacto",
            element: <Contacto />
        },
        {
            path: "/editarInfo/:id",
            element: <EditarInfo/>
        }
    ]
}
] )
```

#### API call with axios
```javascript
useEffect(() => {
    const data = async () => {
      const response = await axios.get("http://localhost:3000/results"
      );
      const info = await response.data;
      setAnimales(info);
      console.log(info)
    }

    data()
  }, [])
```

### Developed by
- [Cris](https://www.linkedin.com/in/cristinacasasdesign/)
- [Galina](https://www.linkedin.com/in/galexanrova/)
- [Luciana](https://www.linkedin.com/in/lbonu/)
- [Mar](https://www.linkedin.com/in/mar-domenech-/)
- [Ziortza](https://www.linkedin.com/in/ziortzarl/)

##### Project created during [Factoria F5](https://factoriaf5.org/) Frontend development bootcamp

