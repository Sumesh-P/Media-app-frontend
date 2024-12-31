import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
      <MDBFooter className='text-center' color='white' bgColor='dark'>
        <MDBContainer className='p-4'>
          {/* Social Media Section */}
          <section className='mb-4'>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='google' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='instagram' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>

          {/* Newsletter Section */}
          <section className=''>
            <form action=''>
              <MDBRow className='d-flex justify-content-center'>
                <MDBCol size="auto">
                  <p className='pt-2'>
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </MDBCol>

                <MDBCol md='5' start>
                  <MDBInput contrast type='email' label='Enter your email' className='mb-4' />
                </MDBCol>

                <MDBCol size="auto">
                  <MDBBtn outline color='light' type='submit' className='mb-4'>
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>

          {/* Description Section */}
          <section className='mb-4'>
            <p>
              Stay updated with the latest music releases, exclusive playlists, and personalized recommendations. Join the MelodySphere community and elevate your listening experience.
            </p>
          </section>

          {/* Links Section */}
          <section className=''>
            <MDBRow>
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Company</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Support</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Music</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      Discover Music
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Top Charts
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Playlists
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      New Releases
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Follow Us</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      YouTube
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>

        </MDBContainer>

        {/* Footer copyright */}
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 MelodySphere - All Rights Reserved.
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
