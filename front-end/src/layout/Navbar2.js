import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="Navbar2">
      <nav className="container">
        <div className="row">
          <div className="col-4">
            <svg
              id="logo"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2628.73 489.34"
            >
              <defs>
                <style>.cls-1</style>
              </defs>
              <rect
                className="cls-1"
                x="31.14"
                y="73.95"
                width="1.14"
                height="0.94"
              />
              <rect
                className="cls-1"
                x="31.14"
                y="73.95"
                width="1.14"
                height="0.94"
              />
              <path
                className="cls-1"
                d="M430.42,209.61h-.74a189.69,189.69,0,0,0-30.18-72.83l.53-.53L428.4,85l-26.7-26.7L350.46,86.68l-.53.52A189.78,189.78,0,0,0,276.88,57l-16-57H223.16l-16,57A189.93,189.93,0,0,0,134,87.32l-51.6-29L55.69,85l29,51.6a189.76,189.76,0,0,0-30.34,73.22l-57,16v37.75l57,16A189.5,189.5,0,0,0,72.2,331.79a.9.9,0,0,0,1.67-.17c20-69.56,50.86-129.28,105.69-155.25,24-11.38,50.79-16.05,77.08-12.17,40,5.9,55.9,27.32,54.16,60-6.35,72-57.76,110.11-117.62,99.58A16.26,16.26,0,0,1,179.72,308c-.28-21.88,12-63.26,27.56-109.88a1,1,0,0,0-1.32-1.25c-56.11,23.1-76.52,102.25-71.14,180.65A48.61,48.61,0,0,0,163,418.39a188.89,188.89,0,0,0,44,13.9V433l16.18,56.3h37.76L277.1,433v-.75a189.74,189.74,0,0,0,72.81-30.17l.55.54L401.7,431l26.7-26.69L400,353.08l-.54-.54a189.81,189.81,0,0,0,30.19-72.82h.74l56.29-16.18V225.79Z"
              />
              <path
                className="cls-1"
                d="M570.46,59.33h97.48c38.16,0,93.74,3.73,130.25,53.1,22.4,28.2,31.52,62.22,31.52,100,0,86.69-45.63,153.89-157.21,153.89h-102ZM632.26,312h43.56c66.37,0,92.09-43.55,92.09-98.72,0-24.06-6.23-49.78-20.74-68.86-12.86-16.6-33.6-30.7-70.94-30.7h-44Z"
              />
              <path
                className="cls-1"
                d="M859.58,59.33h54.34v48.53H859.58Zm0,79.23h54.34V366.29H859.58Z"
              />
              <path
                className="cls-1"
                d="M1053.71,200c-.42-12-6.64-24.47-27.79-24.47-18.25,0-27,11.61-27,22.81.42,14.52,17,22.4,38.58,28.62,36.51,10,75.91,20.74,76.33,69.69.83,46.88-38.58,76.74-86.28,76.74-35.26,0-83-18.25-87.11-73.42h54.34c2.07,24.48,23.23,29.45,33.6,29.45,17,0,31.52-11.2,31.11-26.55,0-19.49-17-24.88-58.91-39.4-30.69-9.54-55.58-26.55-56-59.32,0-44.8,37.75-72.59,81.72-72.59,30.7,0,76.33,13.69,80.89,68.44Z"
              />
              <path
                className="cls-1"
                d="M1142.06,59.33h54.34v48.53h-54.34Zm0,79.23h54.34V366.29h-54.34Z"
              />
              <path
                className="cls-1"
                d="M1237.47,138.56h51c0,10,0,19.5-.42,30.28,10-17.84,30.28-37.75,70.93-37.33,74.26.41,88.36,57.24,88.36,97.48v137.3H1393V242.68c0-34-11.2-60.15-49.36-60.15-38.58.41-51.85,26.13-51.85,58.07V366.29h-54.34Z"
              />
              <path
                className="cls-1"
                d="M1720.72,339.33c0,37.33-7.06,61.39-21.16,80.47-19.5,26.13-57.66,46.87-104.53,46.87-70.93,0-105-42.31-113.24-77.56h63c5,10.37,13.69,18.25,23.64,23.22a65,65,0,0,0,29.87,7.89c32.35,0,67.61-22.4,67.61-68.45V332.69c-11.2,20.33-35.26,40.65-73.84,40.65-65.54,0-116.14-49.78-116.14-119.88,0-74.25,53.09-121.54,116.14-121.54,32.77,0,61,14.94,73.84,37.34v-30.7h54.76Zm-190.4-87.11c0,39.82,28.62,70.1,68,70.1,20.32,0,36.5-7.05,48.53-19.5,12-12,19.08-29,19.5-48.53,0-17.42-5.4-35.67-16.6-48.95-10.78-13.68-27.79-22.81-51.43-22.81-36.92,0-68,28.62-68,69.27Z"
              />
              <path
                className="cls-1"
                d="M1761,138.56h51v28.62c5-10.37,27-35.67,66.37-35.67,18.67,0,39.41,5.39,56,23.23,5,5.39,10.79,14.93,13.69,20.74a94.28,94.28,0,0,1,16.59-21.57c14.1-13.28,34-22.4,58.08-22.4,19.08,0,43.14,5,60.56,22.81,20.74,21.57,24.89,40.24,24.89,87.11V366.29h-54.34V243.51c0-14.52-1.25-30.28-9.13-42.31-5.81-11.2-16.59-18.67-35.67-18.67s-32.36,8.3-39.41,20.74-7.88,24.47-7.88,38.16V366.29h-54.34V241.43c0-13.27-1.25-26.13-7.05-37.74-6.64-12-17.84-20.75-37.34-21.16-19.91,0-32.35,9.54-39,21.16-6.64,12-8.71,26.13-8.71,39.4v123.2H1761Z"
              />
              <path
                className="cls-1"
                d="M2188.62,270.47c2.49,36.5,34.84,56.83,66,56.41,26.55,0,44.39-12,54.76-30.69h56c-10.79,25.3-27,44.38-46,57.24-19.08,13.28-41.48,19.91-65.12,19.91-70.11,0-120.3-56.83-120.3-120.29,0-64.71,50.61-121.54,119.47-121.54,34,0,63.88,12.86,85,34.84,27.8,28.62,38.17,64.3,33.6,104.12ZM2318.45,229c-2.07-21.57-24.89-51.85-64.71-51.44-40.23,0-62.22,29-64.29,51.44Z"
              />
              <path
                className="cls-1"
                d="M2627.49,283.33c-12.86,50.61-58.08,90-117,90-72.18,0-122-56-122-121.12,0-67.2,51.85-120.71,119.88-120.71,57.24,0,105.77,36.09,119,91.67H2571.9c-9.54-24.06-31.52-41.07-61.39-41.07-19.91-.41-35.26,6.64-48.53,19.5-11.62,12.45-18.67,30.7-18.67,50.61,0,41.06,28.62,70.1,67.2,70.1,34,0,53.1-20.33,61.39-39Z"
              />
            </svg>
          </div>
          <div className="col-8">
            {" "}
            <ul>
              <li>
                <Link to="/" className="link">
                  <svg
                    id="inicio"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 800 800"
                  >
                    <defs>
                      <style>.cls-1</style>
                    </defs>
                    <path
                      className="cls-1"
                      d="M400,0C179.09,0,0,179.09,0,400A398.66,398.66,0,0,0,32.44,558C87.1,449.44,193,307.14,400,110.7c9.82-9.32,205.41,241.5,205.41,241.5a20.42,20.42,0,0,1,5.46,13.9V560.76a14.34,14.34,0,0,1-14.34,14.35H444.63V447.72H355.91V575.11H215.66A12.63,12.63,0,0,1,203,562.48V373.85c0-5.36-101.85,162.46-123.38,265.73C152.62,737,269,800,400,800c220.91,0,400-179.09,400-400S620.91,0,400,0Z"
                    />
                  </svg>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/#nosotros" className="link">
                  <svg
                    id="nosotros"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 800 800"
                  >
                    <defs>
                      <style>.cls-1</style>
                    </defs>
                    <path
                      className="cls-1"
                      d="M400,0C179.09,0,0,179.09,0,400A398.72,398.72,0,0,0,32.07,557.15C123.76,439,294.42,301.61,375.92,252.38a128.44,128.44,0,0,1,21.56-12h0c19.87-8.86,43.24-14.51,61.24-14.51,21.37,0,44.28,13,26.35,61.58L380.37,565.92c-3,7.5-8.46,20-8.46,28,0,3.5,2,7,6,7,14.91,0,25.31-24,32.29-24,2.49,0,5.94,3,5.94,7.51,0,14.49-41.23,58.07-91.48,58.07-17.91,0-47.18-8.5-47.18-27.53,0-24,16.92-65.08,20.4-73.59l103.75-269c3.5-9-1.08-14.28-5-13.49-8.14,1.65-14.83,7.43-20.55,13.27h0L374.31,274c-3.1,3.26-5.91,6.4-8.51,8.71C286.26,363.54,144.4,490.62,77.74,637c72.83,98.88,190,163,322.26,163,220.91,0,400-179.09,400-400S620.91,0,400,0Zm74.57,201.09c-29.53,0-49-19.56-49-49.27,0-31.87,27.36-57.95,59.05-57.95,28.8,0,49.69,19.55,49.69,49.26C534.33,176.47,507,201.09,474.57,201.09Z"
                    />
                  </svg>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="link">
                  <svg
                    id="proyectos"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 800 800"
                  >
                    <defs>
                      <style>.cls-1</style>
                    </defs>
                    <path
                      className="cls-1"
                      d="M367.32,388.06c7.88,1.05,20.5-6.31,26.28-11l2.1-2.1,28.9-5.78,78.84,70.94,13.66-5.78-20-69.37L496.6,366l-10-3.68c-67.27-32.05-85.14-23.65-85.14-23.65l-8.93,8.41c-34.16,28.91-34.69,31-31,36.79C362.59,386.48,364.17,387.53,367.32,388.06Z"
                    />
                    <path
                      className="cls-1"
                      d="M400,0C179.09,0,0,179.09,0,400A398.66,398.66,0,0,0,31.35,555.49c41.74-88.57,98.2-179.32,158.11-239.37a43.51,43.51,0,0,1,40.32-11.78l7.73,1.73,94.07,19.45L329,334.45l55.18-4.73,2.63-1.58c6.3-8.41,28.37-18.92,104.58,16.3l-4.73-17.87L567,309.75l33.89-8.05v-9.29c0-6.31-5.25-11-11.56-11.57H226.74c-6.36,0-11.56,1.74-11.56,8.1v4.85c-12.3,0-24.26,8.5-33.14,17.4-1.75,1.75-3.49,3.53-5.23,5.32v-24.1a46.74,46.74,0,0,1,1.05-8.94,58.4,58.4,0,0,1-1.05-9.46V250.89a50.45,50.45,0,0,1,50.45-50.45H328.69A50.39,50.39,0,0,1,378.62,243H589.89a49.4,49.4,0,0,1,49.4,49.4V523.12a49.91,49.91,0,0,1-49.93,49.93H226.74a49.9,49.9,0,0,1-49.93-49.93V418.54a2.83,2.83,0,0,1,3.08-2.81c10.74,1,25.08,4.27,27.47,12a11.56,11.56,0,0,0,6.7,7.47l1.12.44v87.47a11.59,11.59,0,0,0,11.56,11.56H589.36a11.59,11.59,0,0,0,11.56-11.56V454.8h-78L521.3,449l-10,4.73c.52,7.88-2.1,14.71-6.83,19.44-5.26,5.78-13.14,7.89-17.87,8.41-8.94,12.09-20,15.77-28.38,15.24-2.1,3.16-4.21,6.31-7.36,7.89-6.83,4.73-16.29,5.25-22.07,4.73a9.64,9.64,0,0,1-4.75,1l-1.29.09a40,40,0,0,1-10.78,1.5c-13.14,0-24.7-7.35-26.28-8.41l-89.86-51.5-.53,3.68-76.06-29.93a10.46,10.46,0,0,1-6.22-6.83c-3.16-10.89-31.93-14.34-36.23-11.33-48.62,34.13-82.26,87.86-97.16,231.8C152.6,737,268.94,800,400,800c220.91,0,400-179.09,400-400S620.91,0,400,0Z"
                    />
                    <path
                      className="cls-1"
                      d="M300.58,439l94.59,53.08s3.16,1.58,6.84,3.16L387.82,481.6c-3.68-3.68-4.21-8.93-.53-12.61s8.94-4.21,12.61-.53l26.81,25.76c2.74,0,11.78,1.71,15.77-2,0-.45,0-.64,0-1.09L401,451.65c-3.67-3.68-4.2-8.94-.52-12.62,3.68-4.2,8.93-4.2,12.61-.52l45.2,43.09c2.63.53,6.83.53,11.56-4.2l-55.71-54.13c-3.68-3.68-4.2-8.94-.52-12.62s8.93-4.2,12.61-.52L485,466.36a11.84,11.84,0,0,0,7.36-3.15c1.58-2.1,1.58-5.26,1.05-5.78l-75.15-65.7-15.77,3.16c-5.78,4.2-23.12,16.29-38.89,13.14-7.88-1.58-13.66-5.26-17.87-12.62-9.46-15.24-4.2-25.22,15.24-42l-36.78,3.68Z"
                    />
                  </svg>
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="link">
                  <svg
                    id="servicios"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 800 800"
                  >
                    <defs>
                      <style>.cls-1</style>
                    </defs>
                    <path
                      className="cls-1"
                      d="M398.21,0C176.59,1-2.78,183.56,0,405.17a398.65,398.65,0,0,0,32.2,152.35c61.05-170.93,158.33-384,232.62-371.67l82.4,46.46,24.14,54.18,64.15,62.4-37.68,34.17-71.24-69.48-42.39-14.17-41.44-85.13a7.14,7.14,0,0,0-7.84-3.92c-49.95,10.55-103,209.24-156,428.2C152,736.77,269.07,800.32,401,800c220.64-.53,399-179.36,399-400C800,178.49,619.94-1,398.21,0ZM680.92,566.86l-55.18,55.19a13,13,0,0,1-18.31,0L487.09,501.71a13,13,0,0,1,0-18.31l54.18-54.18a13,13,0,0,1,18.31.06L680.92,548.43l.08.08A13,13,0,0,1,680.92,566.86ZM650.51,336.79c-14.93,6.08-36.75,2.5-38.63,2.5-1.44-.31-18.56-3.7-42.64,21.26s-146.74,147.81-153,154.08l-.44.44c-2.13,1.75-19.88,16.55-19.88,37.94-.31,22.82,3.64,38.37-17.75,68.35s-65.84,30.79-72.86,27.09h-.5c-2.14-.82-13.11-6.27,0-22.33a179.44,179.44,0,0,0,22.38-36.43,5.71,5.71,0,0,0-1-6.27L318,574.83a5.51,5.51,0,0,0-2.32-1.44l-22.95-7.47a5.92,5.92,0,0,0-6.78,2.51L258.45,611s-5.58,9.72-17.24-1.38a5.38,5.38,0,0,1-.94-1.13c-2.51-4.07-16.43-28.72-10.73-54.24,6.28-28,12.55-36,28.22-50.42a79.06,79.06,0,0,1,50.05-18,57,57,0,0,0,41.51-17.68C361.8,454.43,498.44,318,504,312.45a64.62,64.62,0,0,0,19.13-47.59c.43-32.23,7.46-62.65,33.67-84.53A87,87,0,0,1,617,161.51h.31c1.63.07,15.68,1,10.29,16.69-4.39,13.67-23.2,40-29.48,49a5.79,5.79,0,0,0,0,6.27,50.2,50.2,0,0,0,31.36,21.39h.69l9,.31a6.25,6.25,0,0,0,5.51-2.95l25.46-43.52a6.52,6.52,0,0,1,.82-1.06c2.57-2.95,14.74-14.74,21.38-2.07,7.59,14.17,22,43.64,11.48,71.36S665.43,330.7,650.51,336.79Z"
                    />
                  </svg>
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="link">
                  <svg
                    id="contacto"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 800 800"
                  >
                    <defs>
                      <style>.cls-1</style>
                    </defs>
                    <path
                      className="cls-1"
                      d="M400,0C179.09,0,0,179.09,0,400A398.79,398.79,0,0,0,31.16,555C171.7,229.49,371.56,123.74,522,155.17c.78.14,1.57.3,2.35.49h0l63.16,15.61a32.77,32.77,0,0,1,19.19,13.35C711.06,337.9,671,542.36,500,639a49.79,49.79,0,0,1-36.44,5l-66-16.32a27.39,27.39,0,0,1-19-36.32l28.82-75.85A26.77,26.77,0,0,1,438.77,499l51.05,12.62C587.76,535.82,641.18,323.4,542.38,299l-48.45-12a32.89,32.89,0,0,1-24.64-36.74l9.5-64.08c-235-13.08-357.71,255-398.45,454.28C153.34,737.35,269.35,800,400,800c220.91,0,400-179.09,400-400S620.91,0,400,0ZM562,465.07c-16,21.31-42.74,38.5-67.54,37.16l-43.68-43.69L562,371.5ZM546,362.64,376.7,495.16,207.37,362.64ZM191.36,371.5l111.22,87L191.36,569.76Zm11.92,210.18L315.94,469l60.76,45.27L437.45,469l31.2,27.28-39-7.79c-13.14-3.25-27.08,8.48-31.89,21.13l-27.37,72Z"
                    />
                  </svg>
                  Contacto
                </Link>
              </li>
              <li className="buscar">
                <svg
                  id="buscar"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 800 800"
                >
                  <defs>
                    <style>.cls-1</style>
                  </defs>
                  <path
                    className="cls-1"
                    d="M487.12,441.14a122,122,0,1,0-122-122A122,122,0,0,0,487.12,441.14Zm34.4-218.73a107.32,107.32,0,0,1,31.5,16,94.17,94.17,0,0,1,36.51,58.75c-5-10.45-10.57-20.41-17.39-29.32a119.16,119.16,0,0,0-23.6-23.45,142,142,0,0,0-29.07-16.53,293.17,293.17,0,0,0-32.35-11.31A123.18,123.18,0,0,1,521.52,222.41Z"
                  />
                  <path
                    className="cls-1"
                    d="M402-2.51c-219.8,0-398,178.19-398,398A396.82,396.82,0,0,0,35,549.74C161.82,256,337.18,142.1,480.35,146.76c2.24-.08,4.5-.14,6.77-.14a172.53,172.53,0,1,1-108.06,307L212.37,620.31a14.08,14.08,0,0,1-19.93,0l-17.76-17.76a14.1,14.1,0,0,1,0-19.93L343.12,414.18A172.54,172.54,0,0,1,359.51,203C203.31,268.2,116.81,474,83.94,634.75,156.57,731.15,272,793.49,402,793.49c219.81,0,398-178.19,398-398S621.81-2.51,402-2.51Z"
                  />
                </svg>
                Buscar
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
