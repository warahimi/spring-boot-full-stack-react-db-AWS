package com.wahid.ChallengeApp.services;

import com.wahid.ChallengeApp.models.Challenge;
import com.wahid.ChallengeApp.repository.ChallengeRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ChallangeService {

    private long nexId = 1L;
    private ChallengeRepository repository;
    public ChallangeService(ChallengeRepository repository)
    {
        this.repository = repository;
    }

    public List<Challenge> getAllChallenges()
    {
        return repository.findAll();
    }
    public boolean addChallenge(Challenge challenge)
    {
        if(challenge != null)
        {
            challenge.setId(nexId++);
            repository.save(challenge);
            return true;
        }
        return false;
    }
    public Challenge getChallengByMonth(String month)
    {
        Challenge result = repository.findByMonthIgnoreCase(month).orElse(null);
//        for(Challenge challenge : repository.findAll())
//        {
//            if(challenge.getMonth().equalsIgnoreCase(month))
//                return challenge;
//        }
        return result;
    }

    public Challenge updateChallenge(long id, Challenge newChallenge)
    {
        Optional<Challenge> challenge = repository.findById(id);
        if(challenge.isPresent())
        {
            Challenge challengeToUpdate = challenge.get();
            challengeToUpdate.setMonth(newChallenge.getMonth());
            challengeToUpdate.setDescription(newChallenge.getDescription());
            repository.save(challengeToUpdate);
        }
        return challenge.orElse(null);
    }
    public Challenge deleteChallenge(long id)
    {
        Optional<Challenge> challenge = repository.findById(id);
        if(challenge.isPresent())
        {
            repository.deleteById(id);
        }
        return challenge.orElse(null);
    }

}
