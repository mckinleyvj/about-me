import React from 'react';
import { Box, Flex, Stack, Text, Grid, GridItem, Image, useMediaQuery } from '@chakra-ui/react';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';

const About = () => {
	const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
	return (
		<Box overflowX='hidden'>
			<Box w='100%' h='100%' opacity='0.3' pos='fixed' zIndex='-9999'>
				<Image
					h='100vh'
					w='100vw'
					src='https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
				/>
			</Box>
			<Header />
			{isSmallerThan800 ? (
				<Flex direction='column' spacing='auto'>
					<Flex direction='column' justifyContent='center' alignSelf='center' w='95vw'>
						<Stack h='88vh'>
							<Text align='center' fontWeight='bold' fontSize='2em' pb='2vh'>
								ABOUT{' '}
								<Box as={'span'} color='brand.500'>
									US
								</Box>
							</Text>
							<Text
								color='brand.500'
								textAlign='justify'
								px={15}
								fontSize='1.125em'
								// lineHeight={2}
								pb={50}>
								Welcome to Yakis Sally Hair & Beauty Salon. We offer a team of
								skilled Hairdressers, Beauticians and Foot Spa Specialists, all
								experts in their field who listen to your needs and deliver
								excellent services you deserve at a reasonable price. We know how
								important for our customers to look and feel your absolute best when
								leaving our salon. Rest assured you're in great hands with the
								experts here at Yakis Sally Hair & Beauty Salon. Our exclusive hair
								and beauty saloon are located in Gadong, Bengkurong, Mentiri and
								Tutong. It's the ultimate one-stop salon for all your hair and
								beauty needs.
							</Text>
							<Text align='center' fontWeight='bold' fontSize='2em' pb='2vh'>
								TESTIM
								<Box as={'span'} color='brand.500'>
									ONIALS
								</Box>
								<Text>-Reserved-</Text>
							</Text>
						</Stack>
					</Flex>
					<Box p={15} alignSelf='center' w='95vw'>
						<Text align='center' fontWeight='bold' fontSize='2em' pb='2vh'>
							GALLERY
							<Text>What we do</Text>
						</Text>
						<Flex
							flexDirection='column'
							// // gap={4}
							// templateRows='repeat(2, 1fr)'
							// templateColumns='repeat(5, 1fr)'
						>
							<GridItem rowSpan={2} colSpan={1}>
								<Box>
									<Image
										src='https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
										alt='Eyelashes'
										h='350px'
										w='100vw'
										objectFit='cover'
									/>
								</Box>
							</GridItem>
							<GridItem colSpan={2}>
								<Box>
									<Image
										src='https://images.unsplash.com/photo-1549236177-f9b0031756eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHNhbG9ufGVufDB8fDB8fA%3D%3D'
										alt='Dan Abramov'
										h='600px'
										w='100%'
										objectFit='cover'
									/>
								</Box>
							</GridItem>
							<GridItem colSpan={2}>
								<Box>
									<Image
										src='https://images.unsplash.com/photo-1588359953494-0c215e3cedc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxzYWxvbnxlbnwwfHwwfHw%3D'
										alt='Dan Abramov'
										h='600px'
										w='100%'
										objectFit='cover'
									/>
								</Box>
							</GridItem>
							<GridItem colSpan={4}>
								<Box>
									<Image
										src='https://images.unsplash.com/photo-1629397685944-7073f5589754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
										alt='Hair Curling'
										h='600px'
										w='100%'
										objectFit='cover'
									/>
								</Box>
							</GridItem>
						</Flex>
					</Box>
				</Flex>
			) : (
				<Flex direction='column' spacing='auto'>
					<Flex direction='column' justifyContent='center' alignSelf='center' w='80vw'>
						<Stack h='88vh' mt='4vh'>
							<Text align='center' fontWeight='bold' fontSize='2em' pb='2vh'>
								ABOUT{' '}
								<Box as={'span'} color='brand.500'>
									US
								</Box>
							</Text>
							<Text
								color='brand.500'
								textAlign='center'
								px={200}
								fontSize='1.2em'
								py={50}
								lineHeight={2}>
								Welcome to Yakis Sally Hair & Beauty Salon. We offer a team of
								skilled Hairdressers, Beauticians and Foot Spa Specialists, all
								experts in their field who listen to your needs and deliver
								excellent services you deserve at a reasonable price. We know how
								important for our customers to look and feel your absolute best when
								leaving our salon. Rest assured you're in great hands with the
								experts here at Yakis Sally Hair & Beauty Salon. Our exclusive hair
								and beauty saloon are located in Gadong, Bengkurong, Mentiri and
								Tutong. It's the ultimate one-stop salon for all your hair and
								beauty needs.
							</Text>
							<Text align='center' fontWeight='bold' fontSize='2em' pb='2vh'>
								TESTIM
								<Box as={'span'} color='brand.500'>
									ONIALS
								</Box>
							</Text>
						</Stack>
					</Flex>
					<Box p='50px' alignSelf='center' w='80vw'>
						<Box fontSize='3xl' align='center'>
							Gallery
							<Text fontSize='lg'>What we do</Text>
						</Box>
						<Grid
							templateRows='repeat(2, 1fr)'
							templateColumns='repeat(5, 1fr)'
							gap={4}>
							<GridItem rowSpan={2} colSpan={1}>
								<Box>
									<Image
										src='https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
										alt='Eyelashes'
										h='1215px'
										objectFit='cover'
									/>
								</Box>
							</GridItem>
							<GridItem colSpan={2}>
								<Box>
									<Image
										src='https://images.unsplash.com/photo-1549236177-f9b0031756eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHNhbG9ufGVufDB8fDB8fA%3D%3D'
										alt='Dan Abramov'
										h='600px'
										w='100%'
										objectFit='cover'
									/>
								</Box>
							</GridItem>
							<GridItem colSpan={2}>
								<Box>
									<Image
										src='https://images.unsplash.com/photo-1588359953494-0c215e3cedc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxzYWxvbnxlbnwwfHwwfHw%3D'
										alt='Dan Abramov'
										h='600px'
										w='100%'
										objectFit='cover'
									/>
								</Box>
							</GridItem>
							<GridItem colSpan={4}>
								<Box>
									<Image
										src='https://images.unsplash.com/photo-1629397685944-7073f5589754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
										alt='Hair Curling'
										h='600px'
										w='100%'
										objectFit='cover'
									/>
								</Box>
							</GridItem>
						</Grid>
					</Box>
				</Flex>
			)}

			<Footer />
		</Box>
	);
};

export default About;
