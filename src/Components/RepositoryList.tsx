import React ,{FunctionComponent} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { ListItemLink } from './ListItemLink';
import { Repository, RepositoryListProps } from '../Types/UserRepositoriesTypes';
import { styles } from '../Styles/styles';

const useStyles = makeStyles(styles);

export const  RepositoryList:FunctionComponent<RepositoryListProps> =({repositories=[]})=>{
    const classes = useStyles();
    return (
        <>
            <Box className={classes.reposTitle} alignItems="center" alignContent="center">
                <Typography color="primary" align="center" variant="h4">
                    @Repositories@
                </Typography>
            </Box>
            <Box className={classes.repos} flexDirection="row" display="flex"  flexWrap="wrap">
                {repositories?.map((item:Repository)=>(
                    <Box key={item.id} m={0} p={0}>
                        <ListItemLink  href={`http://www.github.com/${item.full_name}`} target={'_blank'} >
                            <Card >
                                <CardContent>
                                    <Typography variant="h5" color="textPrimary" >
                                        {
                                                item.name ?
                                                `Repository Name : ${item.name}`:
                                                `Repository Name : No Repo name found`
                                        }
                                    </Typography>
                                    <Typography variant="h6" >
                                        {
                                            item.description?
                                            `Description : ${item.description}`:
                                            'Description : No Discription found'
                                        }
                                    </Typography>
                                    <Box>
                                        <Typography display="inline" variant="body2" className={classes.stars} >
                                            {
                                                item.stargazers_count?
                                                `Stars : ${item.stargazers_count}`:
                                                'Stars : No Stars'
                                            }
                                    
                                        </Typography>
                                        <Typography display="inline" variant="body2" component="p">
                                        {
                                            item.language?
                                            `Langueage'(s)  : ${item.language}`:
                                            `Langueage'(s) : No Languages`
                                        }
                                    
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </ListItemLink>
                    </Box>
            ))}
            </Box>
        </>
   )
}
