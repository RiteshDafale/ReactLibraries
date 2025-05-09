import React from 'react'
import MaterialUL from '../content/MaterialUL'
import Chakra from '../content/Chakra'
import Bootstrap from '../content/Bootstrap'
import AntDesign from '../content/AntDesign'
import MotionDev from '../content/Animation/MotionDev'
import Anime from '../content/Animation/Anime';
import ReactSpring from '../content/Animation/ReactSpring';
import ReactFiber from '../content/Animation/reactFiber'
import ReactRouter from '../content/Router/ReactRouter';
import Tanstack from '../content/Router/Tanstack';
import Wouter from '../content/Router/Wouter';
import ReactNavi from '../content/Router/ReactNavi';
import Axios from '../content/DataFetching/Axios';
import tanstack from '../content/DataFetching/Tanstack';
import Reactquery from '../content/DataFetching/Reactquery';
import Reactfetch from '../content/DataFetching/Reactrefetch';
import FontAwesome from '../content/iconLibrary/FontAwesome';
import MaterailIcons from '../content/iconLibrary/Material';
import ReacIcons from '../content/iconLibrary/ReactIcons';
import ReactLucide from '../content/iconLibrary/ReactLuicide';
import ReactLuicide from '../content/iconLibrary/ReactLuicide'
import ReactIcons from '../content/iconLibrary/ReactIcons'
import Material from '../content/iconLibrary/Material'



function LibraryCont({ libraryInfo }) {
  return (
    <div className='text-lg' >
      {
        libraryInfo === "Material" && (
          <>
            <MaterialUL />
          </>
        )
      }
      {
        libraryInfo === "Chakra" && (
          <>
            <Chakra />
          </>
        )
      }
      {
        libraryInfo === "Bootstrap" && (
          <>
            <Bootstrap />
          </>
        )
      }
      {
        libraryInfo === "AntDesign" && (
          <>
            <AntDesign />
          </>
        )
      }
      {
        libraryInfo === "motion" && (
          <>
            <MotionDev />
          </>
        )
      }
      {
        libraryInfo === "anime" && (
          <>
            <Anime />
          </>
        )
      }
      {
        libraryInfo === "reactspring" && (
          <>

            <ReactSpring />
          </>
        )
      }
      {
        libraryInfo === "reactfiber" && (
          <>
            <ReactFiber />
          </>
        )
      }
      {
        libraryInfo === "reactrouter" && (
          <>
            <ReactRouter />
          </>
        )
      }
      {
        libraryInfo === "wonder" && (
          <>
            <Wouter />
          </>
        )
      }
      {
        libraryInfo === "reactnavir" && (
          <>
            <ReactNavi />
          </>
        )
      }
      {
        libraryInfo === "tanstack" && (
          <>
            <Tanstack />
          </>
        )
      }
      {
        libraryInfo === "axios" && (
          <>
            <Axios />
          </>
        )
      }
      {
        libraryInfo === "tanstackqueryno" && (
          <>
            <h5 className='text-shadow-red-600 underline'>under maintainance </h5>
          </>
        )
      }
      {
        libraryInfo === "reactquery-no" && (
          <>
            <Reactquery />
          </>
        )
      }
      {
        libraryInfo === "reactfetch-no" && (
          <>
            <Reactfetch />
          </>
        )
      }
      {
        libraryInfo === "fontawesome" && (
          <>
            <FontAwesome />
          </>
        )
      }
      {
        libraryInfo === "reactlucide" && (
          <>
            <ReactLuicide />
          </>
        )
      }
      {
        libraryInfo === "reactIcons" && (
          <>
             <ReactIcons />
          </>
        )
      }
      {
        libraryInfo === "Materialicons" && (
          <>
              <Material />
          </>
        )
      }
    </div>
  )
}

export default LibraryCont
