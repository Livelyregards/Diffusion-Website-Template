# Web Template for Diffusion Website

## Demo
- [3dldm](https://3dldm.org/)

### Cloning and Running the Project

1. **Clone the Repository**
   - Clone the project repository to your local machine using Git:
     ```
     git clone https://github.com/Livelyregards/Diffusion-Website-Template.git && cd Diffusion-Website-Template
     ```

2. **Install Dependencies**
   - Navigate to the project directory and install the necessary dependencies using your package manager, I used `npm` here for simplicity:
     ```
     npm install
     ```
     

3. **Development Server**
   - To run a development server:
     ```
     npm run dev
     ```
   - This will typically start a local server, often on `http://localhost:3000`, where you can view and interact with the project.

4. **Building the Project**
   - For production build:
     ```
     npm run build
     ```
   - This command will create an optimized production build of the project.

## File Structure

- **main.js:** Contains the JavaScript code that utilizes Three.js for 3D rendering.
- **index.html:** The HTML file that structures the web presentation of the project.
- **models** The folder that contains the 3D models you would like the user to visualize
- **resources** The folder that contains your figures

## main.js Breakdown

### Import Statements
- `THREE`: Main Three.js library used for 3D graphics.
- `OrbitControls`: Allows camera orbiting around a 3D scene.
- `OBJLoader`: Loader for OBJ files, a common 3D model format.

### Functions


1. **initModel(objPath, containerId)**
   - Initializes and loads 3D models (OBJ files) into specified container elements.
   - Sets up a scene, camera, lights, and rendering controls.
   - `objPath`: Path to the OBJ file.
   - `containerId`: ID of the HTML container for the model.
   - Includes animation loop for rendering and controls update.

### Initialization Calls
- Calls `initModel` with different model paths and container IDs.
- Calls `initBackground` to start the background animation.

  ## Additional Resources
- [Three.js Documentation](https://threejs.org/docs/)
- [WebGL Fundamentals](https://webglfundamentals.org/)
