<template>
    <section class="work" id="work">
        <div>
            <div class="sectionTitle">My Works</div>   
            <div class="row">     
                <div class="col-lg-4 col-sm-6" v-for="item in project" :key="item.id">
                    <div class="card"> 
                        <div class="card__image">
                            <img :src="require(`@/assets/images/${item.image}`)" alt={item.alt} class="img-fluid"/>
                        </div>
                        <div class="card__desc">
                            <div class="card__desc--title">
                                {{item.title}}
                            </div>
                            <div class="card__desc--actions">
                                
                                    <a href="#" class="btn btn-primary">
                                        <span>
                                            <i class="fa fa-link"></i>
                                        </span>
                                    </a> 
                                  
                                <a :href="`${item.linkPage}`" class="btn btn-primary" target="_blank">
                                    <span>
                                        <i class="fa fa-link"></i>    
                                    </span>
                                </a>
                            </div>  
                        </div>    
                    </div>
                </div> 
            </div>                              
        </div>
    </section>
</template>

<script>

import VueEasyLightbox from 'vue-easy-lightbox'
export default {
     components: {
    VueEasyLightbox
  },
    
    data(){
        return{
          project:[
            {  
            id: '1',
            image: 'nutru.jpeg', 
            alt: 'Nutru',
            title: 'Nutru',
            imgOpen: '0',
            linkPage: 'http://logicsdrive.net/clients/email/images/new-nutru16/'
        },
        {  
            id: '2',
            animate: '1000',
            image: 'tdalal.png', 
            alt: 'Tdalal',
            title: 'Tdalal',
            imgOpen: '1',
            linkPage: 'https://tdalal.com.kw/en/'
        }, 
        {  
            id: '3',
            animate: '1500',
            image: 'ottu.png', 
            alt: 'Ottu',
            title: 'Ottu',
            imgOpen: '2',
            linkPage: 'https://www.ottu.com/en/'
        },  
        {  
            id: '4',
            animate: '500',
            image: 'da3aity.png', 
            alt: 'Da3aity',
            title: 'Da3aity',
            imgOpen: '3',
            linkPage: 'http://www.da3aity.com/'
        }, 
        {  
            id: '5',
            animate: '1000',
            image: 'nextgen.png', 
            alt: 'NextGen',
            title: 'NextGen',
            imgOpen: '4',
            linkPage: 'https://www.nextgenconnect.com/'
        },
        {  
            id: '6',
            animate: '1500',
            image: 'kn2021.png', 
            alt: 'Kn',
            title: 'Kn2021',
            imgOpen: '5',
            linkPage: 'https://kuwaitnet.com/'
        }, 
        {  
            id: '7',
            animate: '500',
            image: 'nf.png', 
            alt: 'Nf',
            title: 'National Fund',
            imgOpen: '6',
            linkPage: 'https://www.nationalfund.gov.kw/en/'
        }, 
        {  
            id: '8',
            animate: '1000',
            image: 'olshi.png', 
            alt: 'Olshi',
            title: 'Olshi',
            imgOpen: '7',
            linkPage: '#'
        },
        {  
            id: '9',
            animate: '1500',
            image: 'america-garden.png', 
            alt: 'America Gardens',
            title: 'America Gardens',
            imgOpen: '8',
            linkPage: 'https://americagardensusa.com/'
        },
        {  
            id: '10',
            animate: '500',
            image: 'aqarat.png', 
            alt: 'Aqarat',
            title: 'Aqarat',
            imgOpen: '9',
            linkPage: 'https://www.aqarat.com.kw/'
        },
        {  
            id: '11',
            animate: '1000',
            image: 'ee.png', 
            alt: 'Evalyn Elizabeth',
            title: 'Evalyn Elizabeth',
            imgOpen: '10',
            linkPage: 'https://www.evalynelizabeth.com/'
        },
        {  
            id: '12',
            animate: '1500',
            image: 'mtp.png', 
            alt: 'Michele Therese',
            title: 'Michele Therese',
            imgOpen: '11',
            linkPage: 'https://www.micheletherese.com/'
        },
        {  
            id: '13',
            animate: '500',
            image: 'duwaween.png', 
            alt: 'Duwaween',
            title: 'Duwaween',
            imgOpen: '12',
            linkPage: 'https://web.duwaween.games/en/'
        },
        {  
            id: '14',
            animate: '1000',
            image: 'makeawag.png', 
            alt: 'Make a Wag',
            title: 'Make a Wag',
            imgOpen: '13',
            linkPage: 'https://www.makeawag.org/'
        },
        {  
            id: '15',
            animate: '1500',
            image: 'movestudio.png', 
            alt: 'Move Studio',
            title: 'Move Studio',
            imgOpen: '14',
            linkPage: 'https://www.movestudiopilates.com/'
        },
        {  
            id: '16',
            animate: '500',
            image: 'eventlify.png', 
            alt: 'Eventlify',
            title: 'Eventlify',
            imgOpen: '15',
            linkPage: 'https://www.eventlify.com/'
        }
          ],
          mainTitle:"Contact me",
          title:"Get in touch",
          desc:"My inbox is always open. Whether for a potential project or idea, I’ll try my best to answer your email!",
		  heading:'Message me',
		  btnText:'Send message'

        }
    },
 
}
</script>


<style lang="scss" scoped>
  .work {
    padding: rem(50px) 0;
    .card {
        margin-bottom: rem(30px);
        border: 0;
        border-color: var(--primary);  
        &__image {  
            height: 200px; 
            overflow: hidden;
            @media screen and (max-width: 991px) {
                height: 150px;
            }
            img {
                transition: .3s ease all;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
                &:hover {
                    transform: scale(1.2);
                }
            }
        }
        &__desc {
            padding: rem(10px) rem(20px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--primary);
            &--title {
                color: #fff;
                font-size: rem(20px);
                font-weight: 700;
            }
            &--actions {
                display: flex;
                .btn {
                    min-width: auto;
                    height: 40px;
                    width: 40px;
                    padding-right: rem(15px);
                    padding-left: rem(15px);
                    background-color: transparent !important;
                    @media screen and (max-width: 767px) {
                        margin-bottom: 0;
                    }
                    span {
                        color: var(--white);
                        font-size: rem(20px);
                        &:hover {
                            transform: scale(1.2);
                        }
                    }
                    &:not(:last-child) {
                        margin-right: rem(6px);
                    }
                }
            }
        } 

    }
}   
</style>
