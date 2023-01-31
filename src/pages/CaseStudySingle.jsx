import { React, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Body from '../components/case-study-single/Body';
import EditBody from '../components/case-study-single/EditBody';
import ContactComponent from '../components/contact-component/ContactComponent';
import LoaderGif from '../components/shared-components/LoaderGif';
import { get } from '../service/CaseStudySingleService';
import './styles/CaseStudySingle.css';

const CaseStudySingle = ({ editMode }) => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [pageData, setPageData] = useState({});
  const [requestStatus, setRequestStatus] = useState();

  const { id } = useParams();

  useEffect(() => {
    get(id, setPageData, setRequestStatus, setPageLoaded);
  }, [id]);

  useEffect(() => {
    if (requestStatus === 'error-404') console.error(`Case study with id ${id} could not be found`);
  }, [requestStatus, id]);

  if (pageLoaded && editMode) {
    return (
      <div className='cssp-container'>
        <EditBody body={pageData.body} title={pageData.title} overview={pageData.overview} pageData={pageData} setPageData={setPageData} id={id} />
      </div>
    );
  }
  if (pageLoaded && !editMode) {
    return (
      <div className='cssp-container'>
        <Body body={pageData.body} title={pageData.title} />
        <ContactComponent feedbackType='case-study' />
        <Link to={`/case-study/edit/${id}`}>Edit this page</Link>
      </div>
    );
  }
  if (!pageLoaded) {
    return <LoaderGif />;
  }
};

export default CaseStudySingle;
